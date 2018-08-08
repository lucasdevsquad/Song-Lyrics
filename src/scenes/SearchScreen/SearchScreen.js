import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { searchLyric } from '../../api/lyrics';
import styles from './Style';

export default class SearchScreen extends Component {
    constructor() {
        super()

        this.state = {
            searchMusicTitle: '',
            searchMusicBand: '',
            lyrics: '',
            disabled: false
        }
    }
    static navigationOptions = ({navigation}) => ({
        title: 'Search'
    })

    search = async () => {
        try {
            const { searchMusicTitle, searchMusicBand } = this.state;
            
            this.setState({disabled: true})
            const music = await searchLyric({searchMusicBand , searchMusicTitle});
            this.setState({lyrics: music.lyrics, disabled: false})
            console.log('found', music)
        } catch(e) { 
            console.log(e)
        }
    }

    render() {
        const { lyrics } = this.state;

        return(
            <View style={styles.container}>
                <View style={{
                    marginTop: 26
                }}>
                    <Text>Music Title</Text>
                    <TextInput
                        value={this.state.searchMusicTitle}
                        onChangeText={text => this.setState({searchMusicTitle: text})}
                        placeholder={'search here...'}
                        style={styles.searchInput}
                    />
                </View>

                <View style={{
                    marginTop: 26
                }}>
                    <Text>Band Name</Text>
                    <TextInput
                        value={this.state.searchMusicBand}
                        onChangeText={text => this.setState({searchMusicBand: text})}
                        placeholder={'search here...'}
                        style={styles.searchInput}
                    />
                </View>

                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <ScrollView>
                        <Text>{lyrics}</Text>
                    </ScrollView>

                    <TouchableOpacity onPress={this.search} disabled={this.state.disabled}>
                        <View style={{
                        backgroundColor: '#db45fd',
                        paddingVertical: 10
                    }}>
                            <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>SEARCH</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                

            </View>
        )
    }
}