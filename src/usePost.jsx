import { useState, useEffect } from "react";

const usePost = (url, payload) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, [url, payload])

    return { data, loading, error }
}
export default usePost;