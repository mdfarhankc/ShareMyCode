export type Language = {
    id: string;
    name: string;
    extension: string;
};

export const LANGUAGES: Language[] = [
    { id: "typescript", name: "TypeScript", extension: "ts" },
    { id: "javascript", name: "JavaScript", extension: "js" },
    { id: "python", name: "Python", extension: "py" },
    { id: "rust", name: "Rust", extension: "rs" },
    { id: "go", name: "Go", extension: "go" },
    { id: "java", name: "Java", extension: "java" },
    { id: "c", name: "C", extension: "c" },
    { id: "cpp", name: "C++", extension: "cpp" },
    { id: "csharp", name: "C#", extension: "cs" },
    { id: "php", name: "PHP", extension: "php" },
    { id: "ruby", name: "Ruby", extension: "rb" },
    { id: "swift", name: "Swift", extension: "swift" },
    { id: "kotlin", name: "Kotlin", extension: "kt" },
    { id: "html", name: "HTML", extension: "html" },
    { id: "css", name: "CSS", extension: "css" },
    { id: "json", name: "JSON", extension: "json" },
    { id: "yaml", name: "YAML", extension: "yaml" },
    { id: "sql", name: "SQL", extension: "sql" },
    { id: "bash", name: "Bash", extension: "sh" },
    { id: "markdown", name: "Markdown", extension: "md" },
    { id: "docker", name: "Docker", extension: "dockerfile" },
    { id: "jsx", name: "JSX", extension: "jsx" },
    { id: "tsx", name: "TSX", extension: "tsx" },
];
