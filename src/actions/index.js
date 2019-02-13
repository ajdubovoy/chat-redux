// TODO: add and export your own actions

export const LOAD_MESSAGES = "LOAD_MESSAGES";
export const CHANGE_CHANNEL = "CHANGE_CHANNEL";
export const ADD_MESSAGE = "ADD_MESSAGE";

export function loadMessages(selectedChannel) {
  return (
    fetch(`https://wagon-chat.herokuapp.com/${selectedChannel}/messages`)
      .then(response => response.json())
      .then((data) => {
        return (
          {
            type: LOAD_MESSAGES,
            payload: data.messages
          }
        );
      })
  );
}
export function changeChannel(channel) {
  return {
    type: CHANGE_CHANNEL,
    payload: channel
  };
}
export function addMessage(channel, author, content) {
  const body = { channel, author, content };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: ADD_MESSAGE,
    payload: { author, content, created_at: new Date() }
  };
}
