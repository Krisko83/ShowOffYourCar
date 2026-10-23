import { useEffect, useState } from 'react';
// import request from '../../utils/request.js';
import AskedQuestionItem from './AskedQuestionItem.jsx';
import './AskedQuestions.css'
import { contactsApi } from '../../api/index.js';

export default function AskedQuestions({
    onCreate
}) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        contactsApi.getAllQuestions('/contacts?order=created_at.desc&limit=5', { signal: abortController.signal })
            .then(result => setQuestions(result))
            .catch((err) => console.log(err))

        return () => {
            abortController.abort();
        }
    }, [onCreate])

    return (
        <section className="faq-section">
            <div className="faq-header">
                <h2>Latest Asked Questions</h2>
            </div>

            {questions.map(question => <AskedQuestionItem key={question.id} {...question} />)}

        </section>
    );
}