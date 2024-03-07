'use client';
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
    const options = {
        width: '100%',
        height: '600px',
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 md:py-10 sm:py-10 sm:pt-60 pt-72 pb-10 md:mt-64">
            <h1 className='text-white font-bold text-5xl'>New Trailer</h1>
            <div style={{ maxWidth: '1000px', width: '100%', height: 'auto' }}>
                <YouTube
                    videoId={youtubeId}
                    onReady={(e) => e.target.pauseVideo}
                    opts={options}
                />
            </div>
        </div>
    );
}

export default VideoPlayer;
