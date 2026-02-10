import { Link } from 'react-router-dom';
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState<string>('');

  const handelSubmit = () => {
    console.log(`URL entered ${value}`);
  };

  return (
    <div className="overflow-hidden bg-linear-to-t w-screen min-h-screen flex justify-center items-center  from-sky-500 to-indigo-500">
      <div className="space-y-4 border-2 border-indigo-400 bg-white rounded-2xl shadow-xl p-8 h-100 w-200 flex justify-center items-center">
        <div className="space-y-4 text-center w-[75%]">
          <h1 className="text-black font-bold text-[50px]">
            Shorten Your Links
          </h1>
          <h3 className="text-black pb-2">
            Simplify, share and track your URL's with ease.
          </h3>
          <InputBox
            type="url"
            variant="primary"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Paste your long URL here..."
          />
          <Button variant="primary" onClick={handelSubmit}>
            Shorten Url
          </Button>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
