import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AdBox, ContentContainer, MenuItemText, SidebarContainer, SidebarMenu, StyledMenuItem, ToggleButton } from './styles';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';


interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const toggleSidebar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const menuItems = [
    { icon: 'ios-home', text: 'Home', onPress: () => navigation.navigate('Home' as never) },
    { icon: 'ios-information-circle', text: 'Saiba sobre o projeto', onPress: () => navigation.navigate('AboutProject' as never) },
   
  ];

 
  
  return (
    <SidebarContainer>
      <SidebarMenu open={isOpen}>

        {menuItems.map((item, index) => (
          <StyledMenuItem key={index} highlight={index >= 4} onPress={item.onPress}>
            <Ionicons name={item.icon} size={24} color={index >= 4 ? '#fff' : '#4b0082'} />
            <MenuItemText highlight={index >= 4}>{item.text}</MenuItemText>
          </StyledMenuItem>
        ))}

     

      </SidebarMenu>

      <ToggleButton onPress={toggleSidebar}>
        <Ionicons name={isOpen ? 'ios-close' : 'ios-menu'} size={24} color="#fff" />
      </ToggleButton>

      <ContentContainer>{children}</ContentContainer>
    </SidebarContainer>
  );
};

export default Sidebar;