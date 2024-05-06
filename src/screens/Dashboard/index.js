/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'underscore';
import * as RootNavigation from '../../core/utils/navigation';
import Main from '../../components/layouts/Main';
import styles from './styles';
import useAuth from '../../core/auth/useAuth';

const Dashboard = () => {

    const { auth } = useAuth();
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Main displayFooter modalVisible={modalVisible} setModalVisible={setModalVisible}>

            <View style={styles.mainContentContainer}>

                <Text style={{ paddingHorizontal: 30, fontSize: 30, textAlign: 'center', marginTop: '25%' }}>

                    YOU DID IT!!!!

                </Text>
                <Text style={{ paddingHorizontal: 30, fontSize: 30, textAlign: 'center', marginTop: '25%' }}>
                    TASK 2. TAKE SCREENSHOT OF THIS SCREEN
                </Text>
            </View>
        </Main>
    );
};

export default Dashboard;
