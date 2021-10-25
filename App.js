import React from 'react'
import {Text,View,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Sound from 'react-native-sound'


const soundList=[
  require('./Assets/one.wav'),
  require('./Assets/two.wav'),
  require('./Assets/three.wav'),
  require('./Assets/four.wav'),
  require('./Assets/five.wav'),
  require('./Assets/six.wav'),
  require('./Assets/seven.wav'),
  require('./Assets/eight.wav'),
  require('./Assets/nine.wav'),
  require('./Assets/ten.wav'),
]


const App =()=>{
  const playsound=(sound)=>{
    const soundvar= new Sound(sound,Sound.MAIN_BUNDLE,(err)=>{
      if(err)
      {
        console.log('not able to play sound')
      }
    })
    setTimeout(()=>{
      soundvar.play()
    },100)
  
soundvar.release()

  }
  return (
    <ScrollView style={style.contsiner}>
    <Image style={style.image} source={require('./Assets/logo.png')}></Image>
    <View style={style.gridcontainer}>
      {soundList.map((sound)=>{
        return<TouchableOpacity key={sound} style={style.box} onPress={()=>playsound(sound)}><Text style={style.text}>{sound}</Text></TouchableOpacity>
      })}
    </View>
    </ScrollView>
  )
}
const style=StyleSheet.create({
  contsiner:{
flex:1,
backgroundColor:'gray'
  },
  image:{
    height:100,
    width:70,
    marginTop:5,
    alignSelf:'center'
  },
  gridcontainer:{
    flex:1,
    margin:5,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:'flex-start',
    justifyContent:"space-around",
  },
  box:{
    height:110,
    alignItems:'center',
    justifyContent:'center',
    width:"46%",
    marginVertical:6,
    backgroundColor:'#0f4c75',
    borderRadius:5,
    shadowColor:'#393e46',
    elevation:5,
  },
  text:{
    fontSize:50,
    color:'#ff4301'
  }
})
export default App