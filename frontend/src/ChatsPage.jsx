import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return(

    <div style={{height: '100vh'}}>
      <PrettyChatWindow
      projectId='b56638e5-af02-467d-ad39-9186374749a5'
      username={props.user.username}
      secret={props.user.secret}
      style={{height:'100%'}}
      />
    </div>
  )
  

};

export default ChatsPage;
