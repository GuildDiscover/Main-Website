import { useState, createContext, useEffect } from "react";
import serverData from "../data/serverData.json";

export const ServerContext = createContext();

export const ServerProvider = ({ children }) => {
  const [servers, setServers] = useState([]);

  const filterServers = (searchTerm) => {
    if (searchTerm === null || searchTerm === "") {
      setServers(serverData);
      return;
    }

    const filteredServers = serverData.filter((server) => {
      if (server.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
      for (let category of server.categories) {
        if (category.toLowerCase().includes(searchTerm.toLowerCase())) return true;
      }
      return false;
    });

    setServers(filteredServers);
  };

  const getServer = (id) => {
    return servers.find((server) => server.id === id);
  };

  useEffect(() => {
    setServers(serverData);
    return () => {
      setServers([]);
    };
  }, []);

  useEffect(() => {
    console.log(servers);
    return () => {};
  }, [servers]);

  const value = { servers, setServers, filterServers, getServer };

  return <ServerContext.Provider value={value}>{children}</ServerContext.Provider>;
};
