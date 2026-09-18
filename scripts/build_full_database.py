#!/usr/bin/env python3
import json
import os
import sys

parts_dir = os.path.join(os.getcwd(), 'src', 'data', 'parts')
os.makedirs(parts_dir, exist_ok=True)

print("Starting generation of 1,000 unique Computer Science questions...")
