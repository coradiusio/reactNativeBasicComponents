import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

export default class TabFloatCard extends React.PureComponent {

  TaskTabNav = () => {
    const { tabContent, tabArray, tabBarOptions } = this.props
    const renderTabs = {}
    tabArray.map(tabName => {
      renderTabs[tabName.toUpperCase()] = {
        screen: ({ navigation }) => {
          const showData = tabContent[tabName]()
          return (
            showData
          )
        }
      }
    })
    const TabStack = createMaterialTopTabNavigator(renderTabs, {
      initialRouteName: tabArray[0].toUpperCase(),
      order: tabArray,
      tabBarOptions: tabBarOptions
    })
    return createAppContainer(TabStack)
  }

  render () {
    const { title } = this.props
    const TasksTabNav = this.TaskTabNav()
    return (
      <View style={styles.cardBaseStyle}>
        <Text style={styles.titleStyler}>
          {title}
        </Text>
        <TasksTabNav />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardBaseStyle: {
    marginTop: 40,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    minHeight: 328
  },
  titleStyler:{
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#aa57ba',
    marginTop: -30,
    paddingTop: 12,
    paddingBottom: 12,
    color: 'white'
  }
})