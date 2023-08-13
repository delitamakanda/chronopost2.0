import { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const TabContext = createContext({} as any);

const initialState = {
    tabs: [
        {
            title: 'Orders', path: '/orders', icon: 'orders'
          },
          {
            title: 'Customers', path: '/customers', icon: 'customers'
          }
    ]
}

const reducers = (state: any, { type, payload }: any) => {
    switch(type) {
        case 'ADD_TAB':
            return {...state, tabs: [...state.tabs, payload]};
        default: 
            return state
    }
}

export const TabProvider = ({ children }: any ) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducers, initialState);
    const addTab = (title: string, path: string) => {
        const tabs = state.tabs;
        const tabIndex = tabs.findIndex((node: any) => node.path === path);
        if (tabIndex === -1) {
            dispatch({type: 'ADD_TAB', payload: { title, path}});
            switchTab(path);
            return;
        }
        switchTab(path);
        return;
    };
    const switchTab = (path: string) => navigate(path);
    return <TabContext.Provider value={{state, dispatch, addTab}}>{children}</TabContext.Provider>
}

export const useTabs = () => useContext(TabContext);
