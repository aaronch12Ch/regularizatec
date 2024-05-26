"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const Results = () => {
  const { data: session } = useSession();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('/api/results');
        setResults(response.data.results);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    if (session) {
      fetchResults();
    }
  }, [session]);

  if (!session) return <p className="text-center text-red-500">Please sign in to view results.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Your Results</h2>
      {results.length === 0 ? (
        <p className="text-center">No results found.</p>
      ) : (
        results.map((result, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">Question {index + 1}</h3>
            <p className="text-gray-700">Your answer: {result.answer}</p>
            <p className={`text-gray-700 ${result.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {result.isCorrect ? 'Correct!' : 'Incorrect'}
            </p>
            {!result.isCorrect && (
              <div className="mt-2 p-2 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">Procedure</h4>
                <p>{result.procedure}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
