import os
import json

renaming = {}
root = 'data/1_longcards_membres'
for folder in os.listdir(root):
    if not os.path.isdir(os.path.join(root, folder)):
        continue
    number, last, first = folder.split('_')
    new_name = f"{first}_{last}"
    renaming[new_name] = folder
    os.rename(os.path.join(root, folder), os.path.join(root, new_name))

with open('renaming.json', 'w', encoding="utf-8") as f:
    json.dump(renaming, f, indent=4, ensure_ascii=False)