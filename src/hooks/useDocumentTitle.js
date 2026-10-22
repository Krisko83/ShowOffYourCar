import { useEffect } from "react";

export default function useDecumentTitle(title) {
    useEffect(() => {
        document.title = title
    }, [title])
}