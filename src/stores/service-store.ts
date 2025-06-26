import { create } from "zustand";

export interface IService {
  id: string;
  name: string;
  iconSrc: string;
  indicatorMessage?: string;
  isCreating: boolean;
  opened: boolean;
  isActive: boolean;
  title: string;
  description: string;
  descriptionIconSrc: string;
}

type ServiceStore = {
  services: IService[];
  toggleOpened: (id: string) => void;
  setIsActive: (id: string, value: boolean) => void;
  setIsCreating: (id: string, value: boolean) => void;
  setIndicatorMessage: (id: string, message: string) => void;
  resetServices: () => void;
  getOpenedServices: () => IService[];
  getActiveService: () => IService | undefined;
};
const defaultServices: IService[] = [
  {
    id: "SV001",
    name: "File Manager",
    iconSrc: "/icons/play.svg",
    isCreating: false,
    isActive: false,
    opened: false,
    title: "Manage Your Files",
    description: "Browse, upload, and organize your files securely.",
    descriptionIconSrc: "/icons/folder.svg",
    indicatorMessage: "File Manager is ready.",
  },
  {
    id: "SV005",
    name: "Shell",
    iconSrc: "/icons/shell.svg",
    isCreating: false,
    isActive: false,
    opened: false,
    title: "Command Shell",
    description: "Access the command line to control your environment.",
    descriptionIconSrc: "/icons/terminal.svg",
    indicatorMessage: "Shell is waiting for commands.",
  },
  {
    id: "SV002",
    name: "Terminal",
    iconSrc: "/icons/monitor.svg",
    isCreating: false,
    isActive: false,
    opened: false,
    title: "Developer Terminal",
    description: "Run scripts, monitor logs, and manage processes.",
    descriptionIconSrc: "/icons/code.svg",
    indicatorMessage: "Terminal session inactive.",
  },
  {
    id: "SV003",
    name: "Device Management",
    iconSrc: "/icons/internet.svg",
    isCreating: false,
    isActive: false,
    opened: false,
    title: "Manage Devices",
    description: "View and control connected devices on your network.",
    descriptionIconSrc: "/icons/device.svg",
    indicatorMessage: "No devices connected.",
  },
  {
    id: "SV004",
    name: "Upload",
    iconSrc: "/icons/apps.svg",
    isCreating: false,
    isActive: false,
    opened: false,
    title: "Upload Files",
    description: "Quickly upload files to your workspace.",
    descriptionIconSrc: "/icons/upload.svg",
    indicatorMessage: "No uploads in progress.",
  },
];

export const useServiceStore = create<ServiceStore>((set, get) => ({
  services: [...defaultServices],

  toggleOpened: (id: string) => {
  set((state) => {
    // First, create a new array with all services
    let services = state.services.map(service => {
      // For the service being toggled
      if (service.id === id) {
        const newOpened = !service.opened;
        return {
          ...service,
          opened: newOpened,
          // Only set active if opening, not when closing
          isActive: newOpened 
        };
      }
      // For all other services
      return {
        ...service,
        // Deactivate if it was active and we're opening a new service
        isActive: service.opened ? service.isActive : false
      };
    });

    // If we just opened a service, make sure it's the only active one
    const openedService = services.find(s => s.id === id && s.opened);
    if (openedService) {
      services = services.map(service => ({
        ...service,
        isActive: service.id === id
      }));
    }

    return { services };
  });
},

  setIsActive(id, value) {
    set((state) => ({
      services: state.services.map((s) =>
        s.id === id ? { ...s, isActive: value } : { ...s, isActive: false }
      ),
    }));
  },
  setIsCreating: (id, value) =>
    set((state) => ({
      services: state.services.map((s) =>
        s.id === id ? { ...s, isCreating: value } : s
      ),
    })),

  setIndicatorMessage: (id, message) =>
    set((state) => ({
      services: state.services.map((s) =>
        s.id === id ? { ...s, indicatorMessage: message } : s
      ),
    })),

  resetServices: () =>
    set(() => ({
      services: [...defaultServices],
    })),

  getOpenedServices: () => get().services.filter((s) => s.opened),

  getActiveService: () =>
    get().services.find((service) => service.isActive && service.opened),
}));
