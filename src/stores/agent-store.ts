import { create } from "zustand";

interface IMessage {
  id: string;
  content: string;
  type: "user" | "bot";
  createdAt: Date;
  iconSrs: string;
  played?: boolean;
}

interface IChat {
  id: string;
  isSelected: boolean;
  messages: Array<IMessage>;
  isCreating: boolean;
  indicatorMessage?: string;
}

interface IAgent {
  id: string;
  chats: Array<IChat>;
  name: string;
  iconSrc: string;
  isSelected: boolean;
}

type AgentStore = {
  agents: Array<IAgent>;
  getSelectedAgent: () => IAgent | undefined;
  selectAgent: (agentId: string) => void;
  addChat: (agentId: string) => string;
  removeChat: (agentId: string, chatId: string) => void;
  setIndicatorMessage: (agentId: string, msg: string | undefined) => void;
  setIsCreating: (agentId: string, isCreating: boolean) => void;
  addMessage: (agentId: string, chatId: string, message: IMessage) => void;
  getSelectedChat: () => IChat | undefined;
  setMessagePlayed: ({
    agentId,
    chatId,
    messageId,
    value,
  }: {
    agentId: string;
    chatId: string;
    messageId: string;
    value: boolean;
  }) => void;
  selectChat: (agentId: string, chatId: string) => void;
  addMessageAsync: (
    agentId: string,
    chatId: string,
    message: IMessage
  ) => Promise<void>;
};

export const useAgentStore = create<AgentStore>((set, get) => ({
  agents: [
    {
      id: "AG001",
      name: "Agent one",
      isCreating: false,
      chats: [],
      iconSrc: "/icons/agent-one.svg",
      isSelected: false,
    },
    {
      id: "AG002",
      name: "Agent Two",
      isCreating: false,
      chats: [],
      iconSrc: "/icons/agent-two.svg",
      isSelected: false,
    },
  ],

  getSelectedAgent: () => {
    const agents = get().agents;
    return agents.find((agent) => agent.isSelected);
  },

  getSelectedChat: () => {
    const state = get();
    const selectedAgent = state.agents.find((agent) => agent.isSelected);
    if (!selectedAgent) return undefined;
    return selectedAgent.chats.find((chat) => chat.isSelected);
  },

  selectAgent: (agentId: string) => {
    set((state) => ({
      agents: state.agents.map((agent) => ({
        ...agent,
        isSelected: agent.id === agentId,
      })),
    }));
  },

  removeChat: (agentId: string, chatId: string) => {
    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;
        return {
          ...agent,
          chats: agent.chats.filter((chat) => chat.id !== chatId),
        };
      }),
    }));
  },

  addChat: (agentId: string) => {
    const newChat: IChat = {
      id: `CHAT_${Date.now()}`,
      isCreating: false,
      messages: [],
      isSelected: true,
    };

    set((state) => ({
      agents: state.agents.map((agent) =>
      agent.id === agentId
        ? {
          ...agent,
          chats: [
          ...agent.chats.map((chat) => ({
            ...chat,
            isSelected: false,
          })),
          newChat,
          ],
        }
        : agent
      ),
    }));

    return newChat.id;
  },

  setIsCreating: (agentId: string, isCreating: boolean) => {
    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;
        return {
          ...agent,
          isCreating,
        };
      }),
    }));
  },

  selectChat: (agentId: string, chatId: string) => {
    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;
        return {
          ...agent,
          chats: agent.chats.map((chat) => ({
            ...chat,
            isSelected: chat.id === chatId,
          })),
        };
      }),
    }));
  },

  setIndicatorMessage: (agentId: string, msg: string | undefined) => {
    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;
        return {
          ...agent,
          indicatorMessage: msg,
        };
      }),
    }));
  },

  addMessage: (agentId: string, chatId: string, message: IMessage) => {
    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;

        return {
          ...agent,
          chats: agent.chats.map((chat) => {
            if (chat.id !== chatId) return chat;
            return {
              ...chat,
              messages: [...chat.messages, message],
            };
          }),
        };
      }),
    }));
  },

  addMessageAsync: async (
    agentId: string,
    chatId: string,
    message: IMessage
  ) => {
    if (message.type === "bot") {
      // Start indicator
      set((state) => ({
        agents: state.agents.map((agent) => {
          if (agent.id !== agentId) return agent;
          return {
            ...agent,
            chats: agent.chats.map((chat) => {
              if (chat.id !== chatId) return chat;
              return {
                ...chat,
                isCreating: true,
                indicatorMessage: "Generating response...",
              };
            }),
          };
        }),
      }));
    }

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000)
    );

    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;
        return {
          ...agent,
          chats: agent.chats.map((chat) => {
            if (chat.id !== chatId) return chat;
            return {
              ...chat,
              messages: [...chat.messages, message],
              isCreating: false,
              indicatorMessage: undefined,
            };
          }),
        };
      }),
    }));
  },

  setMessagePlayed: ({
    agentId,
    chatId,
    messageId,
    value,
  }: {
    agentId: string;
    chatId: string;
    messageId: string;
    value: boolean;
  }) => {
    set((state) => ({
      agents: state.agents.map((agent) => {
        if (agent.id !== agentId) return agent;

        return {
          ...agent,
          chats: agent.chats.map((chat) => {
            if (chat.id !== chatId) return chat;

            return {
              ...chat,
              messages: chat.messages.map((message) => {
                if (message.id !== messageId) return message;
                return {
                  ...message,
                  played: value,
                };
              }),
            };
          }),
        };
      }),
    }));
  },
}));
