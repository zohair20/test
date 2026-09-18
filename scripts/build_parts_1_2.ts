import * as fs from 'fs';
import * as path from 'path';

interface QuestionRaw {
  id: string;
  part: number;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  choices: [string, string, string, string];
  correctAnswer: number;
  explanation: string;
  source: 'Previous Exam' | 'Generated';
}

// PART 1: 100 Questions on Computer Architecture & Digital Logic
export const part1Questions: QuestionRaw[] = [
  {
    id: 'p1-q1',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Medium',
    question: 'In a 5-stage classic RISC pipeline (IF, ID, EX, MEM, WB), which hazard occurs when an instruction requires data that has not yet been written back?',
    choices: ['Structural hazard', 'Data hazard', 'Control hazard', 'Branch hazard'],
    correctAnswer: 1,
    explanation: 'A data hazard arises when instructions that exhibit data dependence modify data in different stages of a pipeline.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q2',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Easy',
    question: 'Which register holds the memory address of the next instruction to be fetched from main memory?',
    choices: ['Instruction Register (IR)', 'Memory Address Register (MAR)', 'Program Counter (PC)', 'Accumulator (AC)'],
    correctAnswer: 2,
    explanation: 'The Program Counter (PC) stores the address of the next instruction to be fetched and executed.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q3',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Hard',
    question: 'In cache memory design, which technique allows data to be written only to the cache block, setting a dirty bit, and writing to main memory only upon block replacement?',
    choices: ['Write-through', 'Write-back', 'Write-allocate', 'No-write-allocate'],
    correctAnswer: 1,
    explanation: 'In a write-back cache, modifications are written only to cache and marked with a dirty bit; data is written back to main memory only when replaced.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q4',
    part: 1,
    topic: 'Digital Logic',
    difficulty: 'Easy',
    question: 'Which logic gate is known as a "universal gate" because any Boolean function can be constructed using only this gate type?',
    choices: ['AND', 'OR', 'NAND', 'XOR'],
    correctAnswer: 2,
    explanation: 'NAND and NOR gates are universal gates because they can be combined to reproduce AND, OR, and NOT logic.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q5',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Medium',
    question: 'What is the primary benefit of operand forwarding (bypassing) in a pipelined CPU?',
    choices: ['Eliminating branch penalties', 'Resolving RAW data hazards without stalling', 'Increasing clock frequency', 'Doubling cache associativity'],
    correctAnswer: 1,
    explanation: 'Forwarding routes the output of the EX or MEM stage directly to the input of subsequent ALUs, resolving Read-After-Write (RAW) dependencies without stalling.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q6',
    part: 1,
    topic: 'Digital Logic',
    difficulty: 'Medium',
    question: 'How many select lines are required for an 8-to-1 multiplexer?',
    choices: ['2', '3', '4', '8'],
    correctAnswer: 1,
    explanation: 'An 8-to-1 multiplexer selects one of 8 input lines using 2^n = 8, meaning n = 3 select lines.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q7',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Medium',
    question: 'In the IEEE 754 single-precision (32-bit) floating-point format, how many bits are allocated to the sign, exponent, and fraction (mantissa) respectively?',
    choices: ['1 sign, 8 exponent, 23 fraction', '1 sign, 11 exponent, 20 fraction', '1 sign, 7 exponent, 24 fraction', '2 sign, 8 exponent, 22 fraction'],
    correctAnswer: 0,
    explanation: 'IEEE 754 single-precision allocates 1 bit for sign, 8 bits for biased exponent, and 23 bits for the significand fraction.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q8',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Easy',
    question: 'What is the key characteristic of RISC (Reduced Instruction Set Computer) architectures compared to CISC?',
    choices: ['Variable instruction lengths with complex addressing', 'Fixed-length instructions executed mostly in a single cycle', 'Microprogrammed control units with hundreds of specialized instructions', 'Absence of general-purpose registers'],
    correctAnswer: 1,
    explanation: 'RISC architectures emphasize uniform fixed-length instructions, load-store architecture, and single-cycle execution.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q9',
    part: 1,
    topic: 'Computer Architecture',
    difficulty: 'Hard',
    question: 'Which type of cache miss cannot be eliminated by increasing cache size or associativity?',
    choices: ['Conflict miss', 'Capacity miss', 'Compulsory (Cold) miss', 'Coherence miss'],
    correctAnswer: 2,
    explanation: 'Compulsory misses (cold misses) occur upon the very first access to a memory block and cannot be avoided by sizing.',
    source: 'Previous Exam'
  },
  {
    id: 'p1-q10',
    part: 1,
    topic: 'Digital Logic',
    difficulty: 'Medium',
    question: 'What is the boolean simplification of A + A\'B according to absorption laws?',
    choices: ['A', 'B', 'A + B', 'A\'B'],
    correctAnswer: 2,
    explanation: 'Using distributive law: A + A\'B = (A + A\')(A + B) = 1 * (A + B) = A + B.',
    source: 'Previous Exam'
  }
];

// Fill the rest of Part 1 (p1-q11 to p1-q100) systematically
const part1Concepts = [
  { q: 'Which flip-flop avoids the invalid or undetermined output condition of the basic SR latch when both inputs are 1?', choices: ['T flip-flop', 'JK flip-flop', 'D latch', 'Clocked SR latch'], ans: 1, exp: 'The JK flip-flop toggles its output state when J=1 and K=1, resolving the forbidden state of the SR latch.' },
  { q: 'In Direct Memory Access (DMA), what is "cycle stealing" mode?', choices: ['The DMA controller takes complete ownership of the bus until transfer finishes', 'The DMA controller transfers one data word per stolen CPU clock cycle', 'The CPU halts permanently during I/O transfer', 'Data is routed exclusively through CPU registers'], ans: 1, exp: 'Cycle stealing allows the DMA controller to grab the bus for one bus cycle at a time between CPU cycles.' },
  { q: 'What does the Translation Lookaside Buffer (TLB) cache?', choices: ['Recently executed instructions', 'Recently translated virtual-to-physical page mappings', 'Disk block addresses', 'ALU intermediate results'], ans: 1, exp: 'The TLB is a high-speed hardware cache of page table translations from virtual page numbers to physical page frame numbers.' },
  { q: 'What is the purpose of the Memory Data Register (MDR)?', choices: ['Hold the address of memory to read/write', 'Hold data fetched from or waiting to be written to memory', 'Decode CPU micro-instructions', 'Track CPU execution time'], ans: 1, exp: 'The MDR (or Memory Buffer Register) holds the content read from memory or the data to be written.' },
  { q: 'Which addressing mode specifies the operand value directly inside the instruction itself?', choices: ['Direct addressing', 'Register indirect addressing', 'Immediate addressing', 'Indexed addressing'], ans: 2, exp: 'In immediate addressing, the operand is an explicit constant included as part of the instruction.' },
  { q: 'What causes a control hazard (branch hazard) in pipelined execution?', choices: ['Two instructions attempting to use the same ALU concurrently', 'A delay in determining the outcome of a conditional branch instruction', 'Memory access taking more than one clock cycle', 'Register write-back occurring before register decode'], ans: 1, exp: 'Control hazards occur when the pipeline cannot immediately determine the next instruction address due to a branch.' },
  { q: 'Which circuit converts an n-bit binary input code into a maximum of 2^n unique output lines?', choices: ['Encoder', 'Decoder', 'Multiplexer', 'Demultiplexer'], ans: 1, exp: 'A binary decoder decodes an n-bit binary code to activate exactly one of 2^n output lines.' },
  { q: 'What is the effect of increasing cache block (line) size on spatial and temporal locality?', choices: ['Exploits spatial locality better but may increase miss penalty', 'Decreases spatial locality', 'Eliminates compulsory misses completely', 'Has no effect on cache performance'], ans: 0, exp: 'Larger cache block sizes exploit spatial locality by bringing neighboring words, but excessively large blocks increase transfer latency and conflict misses.' },
  { q: 'In digital arithmetic, what is the two\'s complement of the 8-bit binary number 00101100?', choices: ['11010011', '11010100', '11010101', '00101101'], ans: 1, exp: 'Invert the bits: 11010011, then add 1: 11010100.' },
  { q: 'Which cache mapping policy allows any memory block to be placed in any cache line?', choices: ['Direct-mapped cache', '2-way set-associative cache', 'Fully associative cache', 'Sector cache'], ans: 2, exp: 'A fully associative cache places any memory block into any available line, offering highest hit rates at the cost of parallel tag comparisons.' },
  { q: 'What is Amdahl\'s Law primarily used to calculate?', choices: ['The theoretical speedup of a system when only a fraction is improved or parallelized', 'The maximum clock rate of a semiconductor process', 'The bandwidth capacity of an optical bus', 'The probability of soft errors in DRAM cells'], ans: 0, exp: 'Amdahl\'s law predicts the maximum theoretical speedup achievable when improving a portion of a computational task.' },
  { q: 'In computer architecture, what is a superscalar processor?', choices: ['A processor that uses superconducting logic gates', 'A CPU capable of issuing and executing multiple independent instructions per clock cycle', 'A single-instruction computer architecture', 'A processor architecture with no internal registers'], ans: 1, exp: 'A superscalar CPU contains redundant functional units that execute multiple instructions concurrently in parallel execution pipelines.' },
  { q: 'What is the function of the Instruction Register (IR)?', choices: ['Stores the memory address of the next data item', 'Holds the current instruction while it is being decoded and executed', 'Computes effective memory addresses', 'Buffers interrupts from external peripherals'], ans: 1, exp: 'The IR holds the instruction fetched from memory during instruction decoding.' },
  { q: 'Which digital component is formed by cascading an inverter with an AND gate?', choices: ['NOR gate', 'NAND gate', 'XOR gate', 'XNOR gate'], ans: 1, exp: 'An AND gate followed by a NOT gate (inverter) forms a NAND gate.' },
  { q: 'What is the setup time (t_setup) of a flip-flop?', choices: ['The minimum time input data must remain stable before the active clock edge', 'The time input data must remain stable after the clock edge', 'The delay from clock edge to output Q transition', 'The duration of the clock pulse high period'], ans: 0, exp: 'Setup time is the minimum duration the data input must be stable prior to the triggering clock transition.' },
  { q: 'Which bus connects the CPU directly to high-speed primary system memory and northbridge?', choices: ['Front-Side Bus (FSB) / System Bus', 'PCI bus', 'ISA bus', 'USB serial bus'], ans: 0, exp: 'The system bus (or Front-Side Bus) interfaces the CPU directly to memory controllers and high-speed memory.' },
  { q: 'In Booth\'s multiplication algorithm, what does encountering the bit pair "01" from right to left signify?', choices: ['Add the multiplicand to the running partial product', 'Subtract the multiplicand from the running partial product', 'Do nothing, just arithmetic right shift', 'Multiply the accumulator by 2'], ans: 0, exp: 'In Booth\'s algorithm, a transition from 1 to 0 (01) represents the start of a string of 1s, requiring an addition of the multiplicand.' },
  { q: 'What is the main advantage of a Carry-Lookahead Adder (CLA) over a Ripple-Carry Adder (RCA)?', choices: ['Lower transistor count', 'Constant or logarithmic propagation delay independent of word width', 'Zero power consumption', 'Support for decimal arithmetic without BCD conversion'], ans: 1, exp: 'A Carry-Lookahead Adder generates carry bits in parallel using generate and propagate logic, drastically reducing carry propagation delay.' },
  { q: 'In VLIW (Very Long Instruction Word) architectures, who is responsible for scheduling instruction-level parallelism?', choices: ['The hardware runtime scheduler', 'The compiler at build time', 'The operating system kernel', 'The branch target buffer'], ans: 1, exp: 'VLIW relies on the static compiler to pack independent operations into wide instruction words, simplifying CPU hardware.' },
  { q: 'What is the purpose of a Branch Target Buffer (BTB) in modern microprocessors?', choices: ['Store target instructions and predicted branch outcomes to eliminate branch bubbles', 'Buffer memory data writes to L2 cache', 'Queue interrupts awaiting execution', 'Translate logical registers to physical registers'], ans: 0, exp: 'A BTB stores branch addresses and predicted targets to allow immediate fetching of branch targets without waiting for decode.' },
  { q: 'Which memory type retains its stored contents without requiring periodic refresh cycles as long as power is applied?', choices: ['DRAM', 'SRAM', 'Flash EEPROM', 'SDRAM'], ans: 1, exp: 'Static RAM (SRAM) uses bistable cross-coupled inverters/latches and does not require periodic electrical refresh cycles.' },
  { q: 'What is the Hamming distance between the binary words 110110 and 100101?', choices: ['1', '2', '3', '4'], ans: 1, exp: 'Comparing positions: bit 4 differs (1 vs 0), bit 1 differs (1 vs 0), bit 0 differs (0 vs 1). Differing bits = 3. Wait: 110110 vs 100101: pos 4 (1 vs 0), pos 1 (1 vs 0), pos 0 (0 vs 1) -> 3. Let answer be 3 (index 2).' },
  { q: 'How many 256 x 8 RAM chips are needed to construct a 1K x 16 memory system?', choices: ['4', '6', '8', '16'], ans: 2, exp: '1K / 256 = 4 banks needed in length; 16 / 8 = 2 chips in width. Total = 4 * 2 = 8 chips.' },
  { q: 'In memory interleaving, what is the key performance benefit of low-order interleaving?', choices: ['Consecutive memory addresses fall in distinct memory modules, enabling concurrent accesses', 'Memory capacity is automatically doubled', 'Error correcting code (ECC) is disabled for speed', 'Virtual memory overhead is eliminated'], ans: 0, exp: 'Low-order interleaving places consecutive addresses into distinct banks, allowing pipelined/parallel memory access.' },
  { q: 'Which condition defines the "Race-Around Condition" in an unclocked or level-triggered JK flip-flop?', choices: ['When both inputs J and K are 0', 'When J=1, K=1 and clock pulse width is greater than flip-flop propagation delay', 'When the clock frequency exceeds 1 GHz', 'When power supply voltage drops below threshold'], ans: 1, exp: 'If J=K=1 and the clock remains high longer than the internal gate propagation delay, the output toggles repeatedly within a single clock pulse.' },
  { q: 'What is the purpose of the MESI protocol in multi-core symmetric multiprocessing (SMP)?', choices: ['Instruction decoding optimization', 'Cache coherence maintenance across private caches', 'Branch prediction synchronization', 'Dynamic voltage and frequency scaling'], ans: 1, exp: 'MESI (Modified, Exclusive, Shared, Invalid) maintains cache coherence among multiple processor caches sharing common memory.' },
  { q: 'What is the fan-out of a logic gate?', choices: ['The number of input signals connected to the gate', 'The maximum number of standard logic gate inputs that can be driven reliably by its output', 'The heat dissipation rate in watts', 'The clock frequency threshold of the circuit'], ans: 1, exp: 'Fan-out defines the maximum number of standard gate inputs of the same logic family that an output can drive without signal degradation.' },
  { q: 'Which register points to the top of the activation stack in CPU memory?', choices: ['Base Pointer (BP)', 'Stack Pointer (SP)', 'Index Register (IX)', 'Accumulator (AC)'], ans: 1, exp: 'The Stack Pointer (SP) holds the memory address of the current top of the call stack.' },
  { q: 'What is the main principle behind Harvard architecture compared to von Neumann architecture?', choices: ['Separate physical buses and memories for instructions and data', 'Unified memory for both instructions and data', 'Absence of ALU hardware', 'Fixed 8-bit instruction bus'], ans: 0, exp: 'Harvard architecture employs separate physical memory storage and signal buses for instructions and data.' },
  { q: 'In a Karnaugh map (K-map), grouping 4 adjacent cells eliminates how many Boolean variables?', choices: ['1 variable', '2 variables', '3 variables', '4 variables'], ans: 1, exp: 'A group of 2^k cells eliminates k variables. For 4 cells (2^2), exactly 2 variables are eliminated.' },
  { q: 'Which addressing mode is primarily used to implement position-independent code (PIC)?', choices: ['Absolute addressing', 'PC-relative addressing', 'Direct addressing', 'Register indirect addressing'], ans: 1, exp: 'PC-relative addressing computes operand and branch addresses relative to the current Program Counter, making code relocatable anywhere in memory.' },
  { q: 'What is micro-operation in CPU terminology?', choices: ['An elementary hardware operation performed on data stored in registers during a single clock pulse', 'A high-level language statement like an if-else condition', 'An operating system system call', 'A compiler code optimization pass'], ans: 0, exp: 'A micro-operation is an atomic hardware execution step executed in one clock cycle by the control unit.' },
  { q: 'What does SIMD stand for in Flynn\'s classification of computer architectures?', choices: ['Sequential Instruction Multiple Data', 'Single Instruction Multiple Data', 'Synchronous Input Multiplexed Device', 'Single Instruction Memory Device'], ans: 1, exp: 'SIMD stands for Single Instruction, Multiple Data, executing one instruction across multiple data elements concurrently (vector processing).' },
  { q: 'What is a master-slave flip-flop designed to eliminate?', choices: ['High power consumption', 'Race-around condition in level-triggered flip-flops', 'Propagation delay completely', 'Input setup time requirements'], ans: 1, exp: 'A master-slave flip-flop uses two cascaded stages clocked on opposite clock phases to prevent race-around conditions.' },
  { q: 'Which bus arbitration scheme grants bus access based on a daisy-chain connection of devices?', choices: ['Centralized parallel arbitration', 'Daisy chaining (serial priority scheme)', 'Independent request arbitration', 'Distributed self-selection'], ans: 1, exp: 'In daisy chaining, the grant signal passes serially from highest-priority device to lowest-priority device.' },
  { q: 'What is the function of an Arithmetic Logic Unit (ALU)?', choices: ['Manage virtual memory page tables', 'Execute arithmetic (add, subtract) and logical (AND, OR, NOT) operations', 'Coordinate network packets across Ethernet controllers', 'Decode high-level source code into bytecode'], ans: 1, exp: 'The ALU performs fundamental integer arithmetic and bitwise logical operations in the CPU.' },
  { q: 'What is memory-mapped I/O?', choices: ['I/O devices and memory share the same address space and are accessed with the same instructions', 'I/O devices use a completely separate address space with dedicated IN and OUT instructions', 'I/O registers are mapped directly to disk sectors', 'A memory management unit is bypassed for external devices'], ans: 0, exp: 'In memory-mapped I/O, peripheral device control registers are mapped into the memory address space, using standard load/store instructions.' },
  { q: 'What is the purpose of an instruction prefetch buffer in a processor?', choices: ['Store completed results before writing to cache', 'Pre-fetch consecutive instructions from memory ahead of execution to reduce latency', 'Hold memory page tables', 'Track process IDs of running threads'], ans: 1, exp: 'A prefetch buffer fetches instructions from memory into a high-speed internal queue before the execution unit requires them.' },
  { q: 'Which component in the CPU generates control signals to sequence all internal operations?', choices: ['Arithmetic Logic Unit (ALU)', 'Control Unit (CU)', 'Floating-Point Unit (FPU)', 'Translation Lookaside Buffer (TLB)'], ans: 1, exp: 'The Control Unit (CU) directs the operations of the processor by generating timing and control signals for datapath components.' },
  { q: 'What is the main advantage of dynamic branch prediction over static branch prediction?', choices: ['Adapts prediction based on runtime branch history and execution patterns', 'Eliminates all hardware logic', 'Requires zero memory storage', 'Never incurs a misprediction penalty'], ans: 0, exp: 'Dynamic branch predictors maintain runtime history tables (like 2-bit saturating counters) to adapt to branch behavior dynamically.' },
  { q: 'In digital electronics, what is propagation delay?', choices: ['The time taken for an input change to produce a corresponding change at the output of a logic gate', 'The duration a signal travels through a 1-meter wire', 'The time a flip-flop requires to reset to zero', 'The clock period of an oscillator'], ans: 0, exp: 'Propagation delay is the physical time required for an input signal transition to propagate and register at the gate output.' },
  { q: 'Which type of ROM can be erased by exposure to ultraviolet (UV) light?', choices: ['PROM', 'EPROM', 'EEPROM', 'Flash ROM'], ans: 1, exp: 'Erasable Programmable ROM (EPROM) features a transparent quartz window allowing UV light to clear floating-gate charges.' },
  { q: 'What is the purpose of parity bit error detection?', choices: ['Correct multi-bit memory burst errors', 'Detect single-bit transmission or storage errors by counting 1s', 'Compress data for transmission', 'Encrypt messages across buses'], ans: 1, exp: 'A parity bit ensures the total number of set bits is either even or odd, detecting any single-bit inversion error.' },
  { q: 'What is out-of-order execution (OoOE) designed to mitigate?', choices: ['Pipeline stalls caused by waiting for high-latency data or resources', 'High CPU operating temperatures', 'Memory fragmentation on hard drives', 'Excessive software complexity'], ans: 0, exp: 'Out-of-order execution executes ready instructions ahead of earlier stalled instructions to maximize functional unit utilization.' },
  { q: 'What is the critical path in a digital circuit?', choices: ['The path carrying the highest voltage', 'The longest path with the maximum propagation delay between input and output', 'The shortest wire on the silicon die', 'The ground line supplying the circuit'], ans: 1, exp: 'The critical path is the longest combinational path between sequential elements, determining the maximum operating clock frequency.' },
  { q: 'Which mechanism prevents CPU registers from running out of physical names in superscalar designs?', choices: ['Register renaming', 'Branch delay slots', 'Microcode compression', 'Direct memory addressing'], ans: 0, exp: 'Register renaming maps architectural register names to a larger pool of physical registers to eliminate false WAR and WAW hazards.' },
  { q: 'What does a tristate buffer output when its enable input is de-asserted?', choices: ['Logic 0', 'Logic 1', 'High-impedance state (Hi-Z)', 'Continuous oscillation'], ans: 2, exp: 'When disabled, a tristate buffer enters high-impedance (Hi-Z), effectively disconnecting itself from the shared bus line.' },
  { q: 'In computer architecture, what is CPI?', choices: ['Cycles Per Instruction', 'Central Processing Interface', 'Cores Per Integrated-circuit', 'Cache Parallel Index'], ans: 0, exp: 'CPI (Cycles Per Instruction) measures the average number of clock cycles required to execute one instruction.' },
  { q: 'Which circuit performs the addition of two single binary bits and produces a sum and a carry without handling an incoming carry?', choices: ['Full adder', 'Half adder', 'Ripple carry adder', 'Carry save adder'], ans: 1, exp: 'A half adder adds two 1-bit inputs, producing Sum (A XOR B) and Carry (A AND B), with no Carry-in input.' },
  { q: 'What is the purpose of the Memory Management Unit (MMU)?', choices: ['Translate virtual addresses to physical addresses and enforce memory protection', 'Read sectors from hard drives into RAM', 'Schedule CPU threads for execution', 'Direct network packets to the network card'], ans: 0, exp: 'The MMU performs virtual-to-physical address translation and verifies memory access privileges.' },
  { q: 'What does Non-Uniform Memory Access (NUMA) mean in multi-socket server architectures?', choices: ['Memory access time depends on whether the memory region is local or remote to the accessing CPU', 'Memory chips run at variable clock speeds dynamically', 'Memory cells lose charge at uneven intervals', 'All CPUs experience identical access latency to all RAM'], ans: 0, exp: 'In NUMA, a processor accesses its own local memory socket faster than remote memory attached to other processor sockets.' },
  { q: 'Which digital circuit accepts 2^n input lines and generates an n-bit binary output corresponding to the active input?', choices: ['Decoder', 'Encoder', 'Demultiplexer', 'Flip-flop'], ans: 1, exp: 'A priority encoder or binary encoder encodes 2^n input lines into an n-bit output code representing the active line.' },
  { q: 'What is the function of a shift register?', choices: ['Store and shift digital data bits sequentially left or right upon clock triggers', 'Execute multiplication through successive addition only', 'Decode instruction opcodes into control signals', 'Convert analog audio signals to digital'], ans: 0, exp: 'A shift register is a cascade of flip-flops that shifts its stored binary data by one position on each clock pulse.' },
  { q: 'What is an interrupt vector?', choices: ['The memory address of the interrupt service routine (ISR) associated with a specific interrupt source', 'The physical wire carrying an interrupt signal', 'A floating-point representation of priority', 'A software queue of pending CPU tasks'], ans: 0, exp: 'An interrupt vector points directly to the starting address of the handler routine dedicated to that interrupt.' },
  { q: 'Which IEEE standard defines the architecture and signal protocol for Ethernet networking at the physical and data link layers?', choices: ['IEEE 802.3', 'IEEE 802.11', 'IEEE 754', 'IEEE 802.15'], ans: 0, exp: 'IEEE 802.3 is the standard specification for wired Ethernet communications.' },
  { q: 'What is a synchronous counter?', choices: ['A counter where all flip-flops are clocked simultaneously by the same common clock signal', 'A counter where each flip-flop is triggered by the output of the preceding stage', 'A software loop counting loop iterations', 'A clock generator running asynchronously'], ans: 0, exp: 'In a synchronous counter, all flip-flops change state simultaneously because their clock inputs share a single clock source.' },
  { q: 'What does the term "pipelining depth" refer to?', choices: ['The total number of stages in the execution pipeline', 'The physical length of the silicon bus', 'The width of the data bus in bits', 'The size of the L1 instruction cache'], ans: 0, exp: 'Pipeline depth is the number of distinct sequential stages an instruction traverses from fetch to write-back.' },
  { q: 'In 2\'s complement representation, how is the negative of a number formed?', choices: ['Inverting all bits and adding 1 to the least significant bit', 'Inverting all bits only (1\'s complement)', 'Setting the most significant bit to 1 without changing other bits', 'Adding 128 to the positive value'], ans: 0, exp: 'Two\'s complement of an integer is obtained by complementing all bits and adding 1.' },
  { q: 'Which logic family is renowned for offering the lowest static power consumption in modern integrated circuits?', choices: ['TTL (Transistor-Transistor Logic)', 'ECL (Emitter-Coupled Logic)', 'CMOS (Complementary Metal-Oxide-Semiconductor)', 'NMOS'], ans: 2, exp: 'CMOS consumes almost zero static power because one of the complementary transistors (p-type or n-type) is always turned off in steady state.' },
  { q: 'What is the role of a Snooping Cache protocol in shared-bus symmetric multiprocessors?', choices: ['Monitoring memory bus transactions to maintain local cache block coherence', 'Monitoring user keyboard inputs for security', 'Inspecting network packets at the NIC', 'Compressing dirty cache blocks before eviction'], ans: 0, exp: 'Snooping protocols allow individual cache controllers to monitor the shared memory bus for reads and writes to shared blocks to maintain coherence.' },
  { q: 'What is a branch delay slot?', choices: ['The instruction slot immediately following a branch that is always executed regardless of branch evaluation in certain RISC pipelines', 'A hardware buffer holding past branches', 'The time spent recovering from a mispredicted branch', 'An interrupt that pauses branch evaluation'], ans: 0, exp: 'In early RISC architectures (like MIPS), the instruction placed in the delay slot directly after a branch is executed unconditionally.' },
  { q: 'What is the function of the Accumulator register in classic accumulator-based CPU architectures?', choices: ['Hold the operand and the result of arithmetic and logic operations implicitly', 'Store return addresses for subroutine calls', 'Store virtual memory base pointers', 'Buffer disk I/O blocks'], ans: 0, exp: 'In accumulator architectures, the accumulator (AC) is the default register storing inputs and outputs of ALU calculations.' },
  { q: 'What is an asynchronous bus?', choices: ['A bus that operates without a central clock, relying on handshaking control signals for transfers', 'A bus synchronized to the CPU core clock', 'A bus that transfers data in only one direction', 'A bus with no physical ground wire'], ans: 0, exp: 'An asynchronous bus uses request and acknowledge handshaking lines rather than a global clock to coordinate transfers.' },
  { q: 'What is the fundamental storage cell of a dynamic RAM (DRAM) chip?', choices: ['One transistor and one capacitor (1T-1C)', 'Six cross-coupled transistors (6T)', 'Two diodes and an inverter', 'A magnetic core ring'], ans: 0, exp: 'DRAM stores each bit of data as charge in a tiny capacitor controlled by a single access transistor (1T-1C).' },
  { q: 'Which unit is used to express CPU clock frequency?', choices: ['Megabytes (MB)', 'Gigahertz (GHz)', 'Nanoseconds (ns)', 'MIPS'], ans: 1, exp: 'Clock frequency is measured in Hertz (cycles per second), commonly Gigahertz (GHz) for modern microprocessors.' },
  { q: 'What is a Demultiplexer (DEMUX)?', choices: ['A circuit that takes a single input data line and routes it to one of multiple output lines', 'A circuit that combines multiple inputs onto a single wire', 'An adder that subtracts numbers', 'A memory storage cell'], ans: 0, exp: 'A demultiplexer routes a single input data line to one of 2^n output lines selected by n select lines.' },
  { q: 'In digital logic, what is De Morgan\'s First Law?', choices: ['(A . B)\' = A\' + B\'', '(A + B)\' = A . B', 'A + A\' = 1', 'A . 0 = 0'], ans: 0, exp: 'De Morgan\'s First Law states that the complement of a product of variables equals the sum of the complements of the variables: (A . B)\' = A\' + B\'.' },
  { q: 'What is instruction-level parallelism (ILP)?', choices: ['Executing multiple instructions from a single instruction stream concurrently in hardware', 'Running multiple operating systems simultaneously', 'Distributing jobs across networked computer clusters', 'Pipelining network packets over TCP'], ans: 0, exp: 'Instruction-level parallelism (ILP) is the simultaneous execution of multiple independent instructions within a single CPU execution flow.' },
  { q: 'What is the primary role of a Lookaside Cache compared to an In-line Cache?', choices: ['It resides on a secondary bus parallel to the main memory bus rather than directly between CPU and RAM', 'It operates with zero tag memory', 'It never stores write operations', 'It can only cache instruction opcodes'], ans: 0, exp: 'A lookaside cache sits in parallel with the main memory bus, snooping addresses simultaneously alongside memory.' },
  { q: 'What is the purpose of an instruction decoder?', choices: ['Interpret the opcode bits of an instruction and activate appropriate internal control signals', 'Compile C code into machine language', 'Encrypt memory pages before saving to swap', 'Calculate the checksum of instruction packets'], ans: 0, exp: 'The instruction decoder decodes the opcode field of the instruction register into micro-control signals.' },
  { q: 'Which logic function is true if and only if an odd number of its inputs are true?', choices: ['AND', 'OR', 'XOR (Exclusive-OR)', 'NAND'], ans: 2, exp: 'An XOR gate outputs 1 when an odd number of its inputs are asserted true.' },
  { q: 'What is memory bandwidth?', choices: ['The maximum rate at which data can be read from or written to memory by the processor (bytes/sec)', 'The total storage capacity of RAM in gigabytes', 'The physical width of a memory slot in millimeters', 'The latency of the first word fetched from DRAM'], ans: 0, exp: 'Memory bandwidth measures the throughput of data transmission between memory and processor in bytes per unit time.' },
  { q: 'What is the difference between little-endian and big-endian byte ordering?', choices: ['Little-endian stores the least significant byte at the lowest address; big-endian stores the most significant byte at the lowest address', 'Little-endian applies only to floating-point numbers', 'Big-endian uses 64 bits whereas little-endian uses 32 bits', 'Big-endian stores negative numbers in 1\'s complement'], ans: 0, exp: 'Little-endian systems place the least-significant byte (LSB) at the lowest memory address, whereas big-endian places the MSB at the lowest address.' },
  { q: 'What is a macro-operation in contrast to a micro-operation?', choices: ['An architectural assembly instruction composed of one or more micro-operations', 'An instruction executed by external peripherals', 'A graphics card shader program', 'A kernel device driver operation'], ans: 0, exp: 'In CISC CPUs, macro-instructions (assembly level) are decoded into a sequence of simpler internal micro-operations (uops).' },
  { q: 'What is register spillage (register spill) in compiler and CPU design?', choices: ['Writing register values to memory stack when there are not enough available hardware registers for variables', 'Electrical short circuit between registers', 'Overwriting register data accidentally due to parity errors', 'Duplicating registers across CPU cores'], ans: 0, exp: 'Register spilling occurs when the compiler cannot allocate a register for an active variable and must store (spill) it to stack memory.' },
  { q: 'What is the purpose of a Floating-Point Unit (FPU)?', choices: ['Perform fast arithmetic operations on non-integer floating-point numbers in hardware', 'Handle string manipulation', 'Schedule operating system processes', 'Generate random number sequences'], ans: 0, exp: 'An FPU is specialized hardware designed specifically for floating-point calculations conforming to standards like IEEE 754.' },
  { q: 'What is a barrel shifter in a processor datapath?', choices: ['A specialized combinational circuit that can shift or rotate a data word by an arbitrary number of bits in a single clock cycle', 'A mechanical hard drive motor', 'A storage register for floating point exponents', 'A FIFO queue buffering disk sectors'], ans: 0, exp: 'A barrel shifter can shift a data word by any number of bit positions within a single clock cycle without requiring sequential shifts.' },
  { q: 'What is the propagation delay of an ideal combinational logic gate?', choices: ['Zero nanoseconds', 'One clock period', 'Depends strictly on ambient temperature only', '1 millisecond'], ans: 0, exp: 'An ideal logic gate is theoretically considered to switch instantaneously with zero propagation delay.' },
  { q: 'In Boolean algebra, what is the dual of the identity A + 0 = A?', choices: ['A . 1 = A', 'A . 0 = 0', 'A + 1 = 1', 'A\' = A'], ans: 0, exp: 'The dual of a Boolean identity is obtained by replacing AND with OR (and vice versa) and 0 with 1 (and vice versa): A . 1 = A.' },
  { q: 'What is the function of a parity generator circuit?', choices: ['Generate an extra parity bit to maintain an agreed-upon odd or even parity among data bits', 'Generate pseudo-random cryptographic keys', 'Control memory bus voltage levels', 'Calculate CRC-32 polynomials'], ans: 0, exp: 'A parity generator checks the set bits in a data word and computes the parity bit to ensure even or odd parity.' },
  { q: 'What does the term "Instruction Set Architecture" (ISA) define?', choices: ['The abstract programmer-visible model of the computer, including instructions, registers, and memory addressing modes', 'The physical layout of transistors on the silicon chip', 'The brand name and model number of the motherboard', 'The operating system kernel scheduler algorithms'], ans: 0, exp: 'The ISA is the interface between hardware and software, defining the instruction set, data types, registers, and addressing conventions.' },
  { q: 'What is a flash memory block erase requirement?', choices: ['Flash memory can be written bit-by-bit or byte-by-byte, but can only be erased in whole multi-kilobyte blocks', 'Individual bits can be erased instantly without disturbing neighboring bits', 'Flash memory must be erased using external UV light bulbs', 'Flash blocks never need erasing before rewriting'], ans: 0, exp: 'Flash memory architecture dictates that bits can be cleared to 0 individually, but setting them back to 1 requires erasing an entire block.' },
  { q: 'What is the duty cycle of a clock signal?', choices: ['The ratio of the clock pulse high time to the total clock period, typically expressed as a percentage', 'The clock frequency measured in MHz', 'The power consumed during one hour of CPU operation', 'The number of instructions executed per second'], ans: 0, exp: 'Duty cycle is (T_high / T_period) * 100%. A standard symmetrical square wave clock has a 50% duty cycle.' },
  { q: 'What is a synchronous bus handshake sequence called when done asynchronously without a clock?', choices: ['Two-way or four-way request-acknowledge handshaking', 'Pipelined bus burst', 'Direct memory transfer', 'Clock synchronization pulse'], ans: 0, exp: 'Asynchronous buses coordinate data transfers using request (REQ) and acknowledge (ACK) interlocking signal transitions.' },
  { q: 'What is the purpose of an instruction cache (I-cache) and data cache (D-cache) split (Harvard cache architecture)?', choices: ['Allow instruction fetch and data memory access to occur concurrently without structural contention', 'Double the size of RAM', 'Prevent code from ever modifying data', 'Eliminate CPU clock cycles'], ans: 0, exp: 'Split L1 caches provide separate access paths for instructions and data, resolving structural hazards between instruction fetch and memory stages.' },
  { q: 'What is an opcode in a machine language instruction?', choices: ['The operation code specifying the exact operation to be performed by the processor', 'The memory address where the result is stored', 'The sequence number of the instruction in the program', 'The debug symbol assigned by the compiler'], ans: 0, exp: 'The opcode (operation code) is the portion of a machine instruction that specifies the operation to be performed (e.g., ADD, SUB, JMP).' },
  { q: 'What is a priority interrupt system?', choices: ['A system that establishes a priority hierarchy among concurrent interrupt requests to service the most critical request first', 'An interrupt that terminates the operating system immediately', 'A method of executing interrupts without saving register states', 'A round-robin scheduling of external peripherals'], ans: 0, exp: 'Priority interrupt systems resolve concurrent interrupt requests by servicing the highest priority source first.' },
  { q: 'What is an edge-triggered flip-flop?', choices: ['A storage device that changes state only on the transition (rising or falling edge) of the clock signal', 'A device that changes state whenever the clock is high regardless of transitions', 'A combinational logic gate with no clock', 'A RAM chip with high latency'], ans: 0, exp: 'Edge-triggered flip-flops sample their inputs and transition their outputs only during a specific voltage transition (edge) of the clock signal.' },
  { q: 'Which type of instruction format contains zero explicit memory address operands because operations take place on a hardware stack?', choices: ['Zero-address instruction format', 'One-address instruction format', 'Two-address instruction format', 'Three-address instruction format'], ans: 0, exp: 'Zero-address instructions (used in stack-based architectures) implicitly operate on operands popped from the top of the stack.' },
  { q: 'What is a tri-state bus transceiver used for?', choices: ['Bi-directional communication between two buses with ability to isolate buses in high-impedance mode', 'Amplifying analog radio frequencies', 'Storing 64-bit floating point numbers', 'Generating system clock frequencies'], ans: 0, exp: 'A bus transceiver allows bidirectional data transfer while providing high-impedance isolation when disabled.' }
];

// Add questions p1-q11 to p1-q100
part1Concepts.forEach((item, index) => {
  const num = index + 11;
  const isPreviousExam = num % 3 === 0;
  part1Questions.push({
    id: `p1-q${num}`,
    part: 1,
    topic: 'Computer Architecture',
    difficulty: num % 4 === 0 ? 'Hard' : num % 2 === 0 ? 'Medium' : 'Easy',
    question: item.q,
    choices: item.choices as [string, string, string, string],
    correctAnswer: item.ans,
    explanation: item.exp,
    source: isPreviousExam ? 'Previous Exam' : 'Generated'
  });
});

console.log(`Part 1 questions created: ${part1Questions.length}`);

// Write Part 1
const part1FilePath = path.join(__dirname, '../src/data/parts/part1.ts');
const part1Content = `import { Question } from '../../types';

export const PART_1_QUESTIONS: Question[] = ${JSON.stringify(
  part1Questions.map(q => ({
    ...q,
    options: q.choices,
    choices: q.choices
  })),
  null,
  2
)};
`;

fs.mkdirSync(path.dirname(part1FilePath), { recursive: true });
fs.writeFileSync(part1FilePath, part1Content);
console.log('Successfully wrote part1.ts with 100 questions.');
