import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-10'>
                <div style={{ borderTopColor: 'transparent' }}
                    class="w-24 h-24 border-4 border-blue-400 border-dashed rounded-full animate-spin">
                </div>
            </div>
        </div>
    );
};

export default Loading;