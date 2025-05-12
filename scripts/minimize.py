import os
import yaml

def process_pretty_name(base_path):
    for root, dirs, files in os.walk(base_path):
        if 'index.md' in files:
            index_path = os.path.join(root, 'index.md')
            with open(index_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Séparer frontmatter YAML du contenu markdown
            if content.startswith('---'):
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    _, yaml_content, markdown_content = parts
                    data = yaml.safe_load(yaml_content)
                    
                    if 'prettyName' in data:
                        original = data['prettyName']
                        data['prettyName'] = original.lower()
                        print(f"Modifié : {original} -> {data['prettyName']} dans {index_path}")
                    
                        # Recomposer le fichier
                        new_content = '---\n' + yaml.dump(data, sort_keys=False, allow_unicode=True) + '---\n' + markdown_content
                        with open(index_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                    else:
                        print(f"Aucun prettyName trouvé dans {index_path}")
                else:
                    print(f"Frontmatter invalide dans {index_path}")
            else:
                print(f"Pas de frontmatter dans {index_path}")

# Exemple d'utilisation
if __name__ == '__main__':
    dossier_entree = '../data/1_longcards_membres'  # ← Remplace ce chemin
    process_pretty_name(dossier_entree)
