import { useEffect, useState } from 'react';  
import { contactsApi } from '../../../api/index.js';
import AskedQuestionItem from '../asked-questionI-tem/AskedQuestionItem.jsx';
import './AskedQuestions.css'
import { toast } from 'react-toastify';

export default function AskedQuestions({
    onCreate
}) {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        contactsApi.getAllQuestions('/contacts?order=created_at.desc&limit=5', { signal: abortController.signal })
            .then(result => setQuestions(result))
            .catch(err => {
                if (err.name !== 'AbortError') {
                toast.error('Failed attempt to retrive questions!')
            }})

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