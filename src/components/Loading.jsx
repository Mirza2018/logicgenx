import React from 'react';

const Loading = () => {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center my-20">
  <div
    className="w-32 h-32 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      className="w-28 h-28 border-4 border-transparent text-green-400 text-2xl animate-spin flex items-center justify-center border-t-green-400 rounded-full"
    ></div>
  </div>
</div>

    );
};

export default Loading;