function tweetMessage() {
    const message = "MIRAI TO WA NIYA\n#MiraitowaTH #NiyaBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
