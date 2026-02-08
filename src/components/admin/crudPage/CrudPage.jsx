"use client";

import React, { useState } from 'react';
import styles from './crudpage.module.css';

const initialState = {
    title: '',
    subtitle: '',
    article: [''],
    author: '',
    tags: [],
    isPublished: true,
};

const CrudPage = ({ onCreate }) => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        
    };

    const handleArticleChange = (idx, value) => {
        const updated = [...form.article];
        updated[idx] = value;
        setForm((prev) => ({ ...prev, article: updated }));
    };

    const addParagraph = () => {
        setForm((prev) => ({ ...prev, article: [...prev.article, ''] }));
    };

    const removeParagraph = (idx) => {
        setForm((prev) => ({
            ...prev,
            article: prev.article.filter((_, i) => i !== idx),
        }));
    };

    const handleTagsChange = (e) => {
        setForm((prev) => ({
            ...prev,
            tags: e.target.value.split(',').map((tag) => tag.trim()).filter(Boolean),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can process data before sending
        console.log(form);
        if (onCreate) onCreate(form);
    };

    return (
        <div className={styles.crudPage}>
            <h1>Create Blog</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Title*:
                    <input
                        name="title"
                        type="text"
                        required
                        value={form.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Subtitle:
                    <input
                        name="subtitle"
                        type="text"
                        value={form.subtitle}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <label>Article Paragraphs*:</label>
                    {form.article.map((para, idx) => (
                        <div key={idx} className={styles.paragraph}>
                            <textarea
                                required
                                value={para}
                                onChange={(e) => handleArticleChange(idx, e.target.value)}
                                placeholder={`Paragraph ${idx + 1}`}
                            />
                            {form.article.length > 1 && (
                                <button type="button" onClick={() => removeParagraph(idx)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addParagraph}>
                        Add Paragraph
                    </button>
                </div>
                <label>
                    Author*:
                    <input
                        name="author"
                        type="text"
                        required
                        value={form.author}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Tags (comma separated):
                    <input
                        name="tags"
                        type="text"
                        value={form.tags.join(', ')}
                        onChange={handleTagsChange}
                    />
                </label>
                <label>
                    Published:
                    <input
                        name="isPublished"
                        type="checkbox"
                        checked={form.isPublished}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CrudPage;