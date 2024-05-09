self.addEventListener('message', event => {
  const channel = new BroadcastChannel(event.data.channelName);  // Access shared channel
  channel.addEventListener('message', event => {
    channel.postMessage('Message received in worker: ' + event.data);
  });
});