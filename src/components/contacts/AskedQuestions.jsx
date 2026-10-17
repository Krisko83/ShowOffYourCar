import { useEffect, useState } from 'react';
import './AskedQuestions.css'
import request from '../../utils/request.js';
import AskedQuestionItem from './AskedQuestionItem.jsx';

export default function AskedQuestions() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        request.getAll('/contacts?order=created_at.desc&limit=5')
        .then(result => setQuestions(result))
        .catch((err) => alert(err))
    }, [])

    return (
        <section className="faq-section">
            <div className="faq-header">
                <h2>Latest Asked Questions</h2>
            </div>

            {questions.map(question => <AskedQuestionItem key={question.id} {...question}/>)}

        </section>
    );
}