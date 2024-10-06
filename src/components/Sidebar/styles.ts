import styled from 'styled-components/native';

export const SidebarContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color:#000000;
`;



interface SidebarMenu {
  open: boolean;
}

export const SidebarMenu = styled.View<SidebarMenu>`
  position: absolute;
  top: 20px;
  right: ${props => (props.open ? '10px' : '-100%')};
  width: 85%;
  height: 100%; /* Altura de 100% do Sidebar */
  background-color: rgba(255, 87, 51, 1);
  border-left-width: 1px;
  border-left-color: #1E90FF;
  z-index: 2;
  padding-top: 40px;
  padding-left: 10px;
  align-items: flex-start;
`;

export const ToggleButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 10px;
  padding: 10px;
  background-color: transparent;
  border-radius: 5px;
  z-index: 3;
`;





interface MenuItemProps {
  highlight: boolean;
}

export const MenuItem = styled.TouchableOpacity<MenuItemProps>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px; /* Mais espaço entre os itens de menu */
  border-radius: 5px;
  background-color: ${props => (props.highlight ? '#4b0082' : 'rgba(255, 255, 255, 0.8)')};
`;

interface MenuItemText {
  highlight: boolean;
}


export const MenuItemText = styled.Text<MenuItemText>`
  font-size: 16px;
  color: ${props => (props.highlight ? '#fff' : '#000')};
  margin-left: 10px;
  width:84%;
`;

export const AdBox = styled.View`
  position: absolute;
  bottom: 50px; /* Posicionamento no rodapé do Sidebar */
  left:10px;
  width: 97%;
  height: 200px;
  
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const AdText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

interface StyledMenuItemProps {
  highlight: boolean;
}

export const StyledMenuItem = styled(MenuItem) <StyledMenuItemProps>`
  background-color: ${props => (props.highlight ? '#4b0082' : 'rgba(255, 255, 255, 0.8)')};
`;

