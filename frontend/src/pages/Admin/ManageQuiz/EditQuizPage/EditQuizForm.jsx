import React, { useState, useEffect } from 'react';

const EditQuizForm = ({ quiz, onSaveUpdateQuiz }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (quiz) {
      setTitle(quiz.title || '');
      setCategory(quiz.category || '');
      setQuestions(quiz.questions || []);
    }
  }, [quiz]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleDeleteQuestion = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(qIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleChange = (qIndex, field, value, oIndex = null) => {
    const newQuestions = [...questions];
    if (oIndex !== null) {
      newQuestions[qIndex].options[oIndex] = value;
    } else {
      newQuestions[qIndex][field] = value;
    }
    setQuestions(newQuestions);
  };

  const saveUpdateQuiz = () => {
    const updatedQuiz = { title, category, questions };
    onSaveUpdateQuiz(updatedQuiz);
  };

  return (
    <form id="quiz-form" className="relative h-auto border-[1px] border-gray p-14 flex flex-col gap-14 rounded-2xl">
      <div>
        <label>Title</label>
        <input type="text" id="title-input" placeholder="Enter quiz title..." value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Category</label>
        <input type="text" id="category-input" placeholder="Enter quiz category..." value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>

      {questions.map((question, qIndex) => (
        <div key={qIndex} className="flex flex-col gap-14">
          <div id="line"></div>

          <div>
            <label>Question #{qIndex + 1}</label>
            <input type="text" value={question.question} placeholder="Enter question..." onChange={(e) => handleChange(qIndex, 'question', e.target.value)} />
          </div>

          <div className="grid grid-cols-2 gap-10">
            {question.options.map((option, oIndex) => (
              <div key={oIndex} className="flex flex-col">
                <label> Option {oIndex + 1}</label>
                <input type="text" value={option} placeholder={`Enter option ${oIndex + 1}`} onChange={(e) => handleChange(qIndex, 'options', e.target.value, oIndex)} />
              </div>
            ))}
          </div>

          <div>
            <label> Correct Answer</label>
            <input type="text" value={question.correctAnswer} placeholder="Enter correct answer..." onChange={(e) => handleChange(qIndex, 'correctAnswer', e.target.value)} />
          </div>

          <button type="button" id="delete-question-button" className="w-[140px] h-[40px] bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={() => handleDeleteQuestion(qIndex)}>
            Delete
          </button>
        </div>
      ))}

      <div className="flex justify-end items-center gap-4">
        <button type="button" id="add-question-button" className="w-[150px] h-[40px] bg-yellow-300 hover:bg-yellow-400 rounded-md" onClick={handleAddQuestion}>
          Add Question
        </button>

        <button type="button" id="save-quiz-button" className="w-[150px] h-[40px] bg-black text-white rounded-md" onClick={saveUpdateQuiz}>
          Save
        </button>
      </div>
      
    </form>
  );
};

export default EditQuizForm;
