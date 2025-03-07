import json
import os

with open('renaming.json', 'r', encoding="utf-8") as f:
    renaming = json.load(f)

root = 'data/1_longcards_membres'
for folder in os.listdir(root):
    if not os.path.isdir(os.path.join(root, folder)):
        continue
    if folder not in renaming:
        continue
    os.rename(os.path.join(root, folder), os.path.join(root, renaming[folder]))