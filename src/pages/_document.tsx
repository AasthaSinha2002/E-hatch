import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />


      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      
      <Head />
      <body>
        
        <Main />
        <NextScript />
        <div className="chat-container"></div>
					<Main />
					<NextScript />
					<script
						src="https://npm-scalableminds.s3.eu-central-1.amazonaws.com/@scalableminds/chatroom@master/dist/Chatroom.js">
					</script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								var chatroom = new window.Chatroom({
								host: "http://ec2-34-252-56-71.eu-west-1.compute.amazonaws.com:5005/",
								title: "Chat with Mike",
								container: document.querySelector(".chat-container"),
								welcomeMessage: "Hi, I am Mike. How may I help you?",
								speechRecognition: "en-US",
								voiceLang: "en-US"
								});
								chatroom.openChat();
									`,
						}}
					></script>
      </body>
    </Html>
  );
}
