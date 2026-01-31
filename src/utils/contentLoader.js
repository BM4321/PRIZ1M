import frontMatter from 'front-matter';

export async function loadContent(type) {
    let files = {};

    // Use Vite's import.meta.glob to load files
    if (type === 'services') {
        files = import.meta.glob('../content/services/*.md', { query: '?raw', import: 'default' });
    } else if (type === 'portfolio') {
        files = import.meta.glob('../content/portfolio/*.md', { query: '?raw', import: 'default' });
    } else if (type === 'packages') {
        files = import.meta.glob('../content/packages/*.md', { query: '?raw', import: 'default' });
    } else if (type === 'team') {
        files = import.meta.glob('../content/team/*.md', { query: '?raw', import: 'default' });
    }

    const contentPromises = Object.values(files).map((loader) => loader());
    const rawContents = await Promise.all(contentPromises);

    const parsedContent = rawContents.map((raw) => {
        const { attributes } = frontMatter(raw);
        return attributes;
    });

    // Sort by 'order' field if present
    return parsedContent.sort((a, b) => (a.order || 0) - (b.order || 0));
}
