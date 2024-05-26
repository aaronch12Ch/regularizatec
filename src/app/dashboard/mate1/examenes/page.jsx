

import React from 'react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '/src/app/api/auth/[...nextauth]/route';

import MathQuiz from '../../../../components/mathQuiz';
async function Examenes() {
const questions = [
  { text: 'What is 2 + 2?', procedure: 'Add 2 and 2 to get 4' },
  { text: 'What is 3 * 3?', procedure: 'Multiply 3 and 3 to get 9' }
];


  const  session  =  await getServerSession(authOptions);

  return (
    <div>
      <h1>Math Quiz</h1>
      {session ? (
        <MathQuiz questions={questions} />
      ) : (
        <p>Please sign in to take the quiz.</p>
      )}
    </div>
  );
};



export default Examenes;

