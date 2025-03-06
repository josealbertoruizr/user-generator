'use client';
import { usePeopleApi } from "../app/hooks/userPeopleApi";

export default function Home() {

  const { currentPerson, personHistory, error, loading, fetchData } = usePeopleApi()

  if (error) return <div>Error loading data</div>; 

  return (
    <div>
      <button 
        onClick={fetchData} 
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Fetch Data
      </button>

      {loading && <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>}
      

      <h1>Current Person</h1> 
      <pre>{JSON.stringify(currentPerson, null, 2)}</pre>

      <div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      


    </div>
  );
}
