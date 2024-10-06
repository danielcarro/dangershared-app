import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { ContentContainer, AdBox, AdText, MenuItemText, SidebarContainer, SidebarMenu, StyledMenuItem, ToggleButton } from './styles';
import { Image, TouchableOpacity } from 'react-native';

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
    { icon: 'home', text: 'Home', onPress: () => navigation.navigate('Home' as never) },
    { icon: 'info', text: 'About project', onPress: () => navigation.navigate('AboutProject' as never) },

  ];



  return (
    <SidebarContainer>
      <SidebarMenu open={isOpen}>

        {menuItems.map((item, index) => (
          <StyledMenuItem key={index} highlight={index >= 4} onPress={item.onPress}>
            <FontAwesome name={item.icon} size={24} color={index >= 4 ? '#fff' : '#1E90FF'} />
            <MenuItemText highlight={index >= 4}>{item.text}</MenuItemText>
          </StyledMenuItem>
        ))}


        <AdBox>

          <Image
            source={require('../../assets/images/logo.png')}
            style={{ width: 250, height: 250 }}
          />

        </AdBox>
      </SidebarMenu>

      <ToggleButton onPress={toggleSidebar}>
        <FontAwesome name={isOpen ? 'times' : 'list'} size={24} color="#fff" />
      </ToggleButton>

      <ContentContainer>{children}</ContentContainer>
    </SidebarContainer>
  );
};

export default Sidebar;