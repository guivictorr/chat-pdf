import { WandSparkles } from "lucide-react";

const mockMessages = [
  {
    role: "user",
    content: "amet nostrud ea esse id irure commodo ea id id",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
  {
    role: "assistant",
    content:
      "Aute pariatur exercitation nisi labore culpa incididunt voluptate amet ea quis nisi mollit irure proident. Eu reprehenderit velit qui duis. Pariatur duis esse enim non. Aute veniam enim laborum et ullamco sunt ipsum officia enim minim nulla. Ut consectetur consequat eiusmod veniam aliquip officia minim consectetur sint deserunt. Anim minim id laborum commodo non sint minim et laboris. Nostrud proident amet veniam aliqua fugiat Lorem adipisicing quis.",
  },
];
export function Messages() {
  return (
    <ol className="p-4 flex flex-col justify-end gap-4 grow border rounded-md overflow-y-auto">
      {mockMessages.map((message) => (
        <li key={message.content} className="flex flex-col gap-4">
          <header className="flex items-center gap-2">
            <span className="font-bold">
              {message.role === "assistant" ? "AI" : "You"}
            </span>
            {message.role === "assistant" && (
              <WandSparkles className="w-4 h-4" />
            )}
            <div className="h-px bg-muted w-full" />
          </header>
          <div>
            Id non dolor consequat ad adipisicing velit nulla qui eiusmod qui.
            Aliqua in commodo velit duis fugiat commodo id dolor proident. Non
            voluptate ullamco laboris consequat irure enim ipsum pariatur irure
            proident amet. Adipisicing nisi et id non in in sit culpa dolore
            pariatur et commodo. Ipsum ullamco veniam deserunt nostrud laboris
            voluptate anim eu esse voluptate do.
          </div>
        </li>
      ))}
    </ol>
  );
}
