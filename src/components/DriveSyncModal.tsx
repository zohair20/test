import React, { useState } from 'react';
import {
  FolderCheck,
  FileText,
  Download,
  Upload,
  RefreshCw,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  X,
  FileUp,
  Database,
  LogOut
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  DEFAULT_DRIVE_FOLDER_ID,
  fetchDriveFolderFiles,
  fetchDriveFileContent,
  parseQuestionsFromRawData
} from '../services/googleDrive';
import { googleSignIn, logoutGoogle } from '../services/firebaseAuth';
import { DriveFileItem, Question } from '../types';

interface DriveSyncModalProps {
  user: User | null;
  token: string | null;
  onQuestionsImported: (newQuestions: Question[]) => void;
  currentQuestions: Question[];
  onClose: () => void;
}

export const DriveSyncModal: React.FC<DriveSyncModalProps> = ({
  user,
  token,
  onQuestionsImported,
  currentQuestions,
  onClose,
}) => {
  const [folderId, setFolderId] = useState(DEFAULT_DRIVE_FOLDER_ID);
  const [files, setFiles] = useState<DriveFileItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [importedPreview, setImportedPreview] = useState<{ count: number; parts: number[] } | null>(null);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const res = await googleSignIn();
      if (res?.accessToken) {
        setStatusMessage(`Connecté avec succès sous ${res.user.email}`);
        await loadFolderFiles(res.accessToken, folderId);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Échec de la connexion Google.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logoutGoogle();
      setFiles([]);
      setStatusMessage('Déconnecté.');
    } catch (err: any) {
      setErrorMessage(err?.message || 'Erreur lors de la déconnexion.');
    }
  };

  const loadFolderFiles = async (accessToken: string, targetFolderId: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    setStatusMessage('Analyse du dossier Google Drive...');
    try {
      const items = await fetchDriveFolderFiles(accessToken, targetFolderId.trim());
      setFiles(items);
      if (items.length === 0) {
        setStatusMessage('Aucun fichier trouvé directement dans ce dossier Drive. Vous pouvez aussi importer des questions par fichier JSON ci-dessous.');
      } else {
        setStatusMessage(`${items.length} fichier(s) trouvé(s) dans le dossier Drive.`);
      }
    } catch (err: any) {
      setErrorMessage(`Erreur Drive : ${err?.message || 'Impossible de récupérer les fichiers.'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImportFile = async (file: DriveFileItem) => {
    if (!token) {
      setErrorMessage('Veuillez d\'abord vous connecter.');
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    setStatusMessage(`Téléchargement et analyse de "${file.name}"...`);
    try {
      const content = await fetchDriveFileContent(token, file.id);
      const parsed = parseQuestionsFromRawData(content);
      if (parsed.length === 0) {
        throw new Error('Aucune question reconnue dans ce fichier. Vérifiez le format JSON ou les questions.');
      }

      const partsPresent = Array.from(new Set(parsed.map(q => q.part))).sort((a, b) => a - b);
      setImportedPreview({ count: parsed.length, parts: partsPresent });
      onQuestionsImported(parsed);
      setStatusMessage(`${parsed.length} questions importées avec succès pour les Parties ${partsPresent.join(', ')} !`);
    } catch (err: any) {
      setErrorMessage(`Échec de l'importation : ${err?.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Local JSON File Drop/Upload fallback
  const handleLocalFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = parseQuestionsFromRawData(text);
        if (parsed.length === 0) {
          setErrorMessage('Aucune question valide trouvée dans le fichier importé.');
          return;
        }
        const partsPresent = Array.from(new Set(parsed.map(q => q.part))).sort((a, b) => a - b);
        setImportedPreview({ count: parsed.length, parts: partsPresent });
        onQuestionsImported(parsed);
        setStatusMessage(`${parsed.length} questions chargées avec succès depuis le fichier local pour les Parties ${partsPresent.join(', ')} !`);
      } catch (err: any) {
        setErrorMessage(`Impossible d'analyser le fichier : ${err?.message}`);
      }
    };
    reader.readAsText(file);
  };

  // Export current database to JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentQuestions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `base_questions_parties_1_a_10_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 my-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 bg-stone-100 dark:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              Base de Questions & Synchronisation Google Drive
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Connectez votre dossier de questions Google Drive ou importez vos séries de QCM.
            </p>
          </div>
        </div>

        {/* Authentication State */}
        <div className="mb-6 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
          {user ? (
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'Utilisateur'}
                    className="w-10 h-10 rounded-full border border-stone-200"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    {user.displayName || 'Utilisateur Google'}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">{user.email}</div>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 dark:border-rose-900 dark:hover:bg-rose-950/40 flex items-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Déconnexion</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-stone-800 dark:text-stone-200 block">
                  Connecter Google Drive
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  Authentifiez-vous pour accéder directement au dossier partagé des questions.
                </span>
              </div>
              {/* Official GSI Styled Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="gsi-material-button inline-flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-100 font-medium text-sm shadow-sm transition-all shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                <span>{isLoading ? 'Connexion en cours...' : 'Se connecter avec Google'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Drive Folder Connection Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300 mb-1.5">
              Identifiant / Lien du Dossier Google Drive
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                placeholder="Identifiant du dossier Google Drive"
                className="grow px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
              />
              <button
                onClick={() => token && loadFolderFiles(token, folderId)}
                disabled={!token || isLoading}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white flex items-center gap-1.5 transition-colors shrink-0"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Analyser</span>
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
              <span>Dossier cible : drive.google.com/drive/folders/{folderId}</span>
              <a
                href={`https://drive.google.com/drive/folders/${folderId}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Ouvrir dans Drive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Status & Error Messages */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {statusMessage && !errorMessage && (
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Files List */}
          {files.length > 0 && (
            <div className="border border-stone-200 dark:border-stone-700 rounded-2xl overflow-hidden">
              <div className="bg-stone-50 dark:bg-stone-800 px-4 py-2 text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                Fichiers disponibles dans le dossier Drive
              </div>
              <div className="divide-y divide-stone-100 dark:divide-stone-800 max-h-48 overflow-y-auto">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="p-3 flex items-center justify-between gap-3 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-stone-400 shrink-0" />
                      <span className="text-xs font-medium text-stone-800 dark:text-stone-200 truncate">
                        {file.name}
                      </span>
                    </div>
                    <button
                      onClick={() => handleImportFile(file)}
                      disabled={isLoading}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Charger</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Local JSON Import & Export Backup */}
        <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <label className="cursor-pointer px-4 py-2 rounded-xl text-xs font-semibold border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center gap-2 transition-colors">
            <FileUp className="w-4 h-4 text-blue-500" />
            <span>Importer un fichier JSON</span>
            <input
              type="file"
              accept=".json,.txt"
              onChange={handleLocalFileUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleExportJSON}
            className="px-4 py-2 rounded-xl text-xs font-semibold border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-stone-500" />
            <span>Exporter la base ({currentQuestions.length} Qs)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
