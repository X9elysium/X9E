import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getListPage(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}

export function getSinglePage(directory) {
  const files = fs.readdirSync(path.join(process.cwd(), directory));
  return files.map((file) => {
    const slug = file.replace('.md', '');
    const fullPath = path.join(process.cwd(), directory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { slug, frontmatter: data, content };
  });
}

export function getRegularPage(slug) {
  const fullPath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}
