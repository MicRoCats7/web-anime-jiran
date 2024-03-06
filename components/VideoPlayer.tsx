'use client';

import YouTube from 'react-youtube';

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
    const option = {
        width: '1000px',
        height: '600px',
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
            <h1 className='text-white font-bold text-5xl'>New Trailer</h1>
            <YouTube
                videoId={youtubeId}
                onReady={(e) => e.target.pauseVideo}
                opts={option}
            />
        </div>
    );
}

export default VideoPlayer;