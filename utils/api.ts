const createUrl = (path: string) => {
    return window.location.origin + path;
}

export const createJournalEntry = async () => {
    const res = await fetch(createUrl("/api/journal"), {
        method: "POST",
        // body: JSON.stringify({}),
    })

    if(res.ok){
        const data = await res.json();
        return data.data;
    }
}

export const updateJournalEntry = async (id: string, content: string) => {
    const res = await fetch(createUrl(`/api/journal/${id}`), {
        method: "PATCH",
        body: JSON.stringify({content}),
    })

    if(res.ok){
        const data = await res.json();
        return data.data;
    }
}

export const askQuestion = async (question: string) => {
    const res = await fetch(createUrl("/api/question"), {
        method: "POST",
        body: JSON.stringify({question}),
    })

    if(res.ok){
        const data = await res.json();
        return data.data;
    }
}