import Header from '@/components/common/header';
import HistoryCard from '@/components/history/item';
import theme from '@/styles';
import { STORAGE_KEYS } from '@/constants/keys';
import { getData, setData } from '@/utils/storage/asyncStorage';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { THistoryItem } from '@/types/common';
import { useCallback, useEffect, useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Spinner from '@/components/common/spinner';
import { useFocusEffect } from '@react-navigation/native';

const History = () => {
  const [historyData, setHistoryData] = useState<THistoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await getData<THistoryItem[]>(STORAGE_KEYS.CALC_HISTORY);
          if (mounted) setHistoryData(data ?? []);
        } finally {
          if (mounted) setLoading(false);
        }
      };

      fetchData();

      return () => {
        mounted = false;
      };
    }, [])
  );

  const deleteHandler = async () => {
    setLoading(true);

    try {
      await setData<THistoryItem[]>(STORAGE_KEYS.CALC_HISTORY, []);
      setHistoryData([]);
    } catch (error) {
      console.error('기록 삭제 실패', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="계산 기록"
        description="최근 계산 기록 최대 50개를 볼 수 있어요."
        topComp={
          <Pressable onPress={deleteHandler}>
            <Text style={styles.deleteButton}>전체 삭제</Text>
          </Pressable>
        }
      />

      {/* {renderContent()} */}

      {historyData?.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.scrollContainer}
          data={historyData}
          renderItem={({ item, index }) => (
            <HistoryCard
              item={item}
              colorIndex={historyData.length - 1 - index}
            />
          )}
          keyExtractor={(item, index) => item.updateTs + index}
        />
      ) : (
        <View style={styles.centerContainer}>
          <FontAwesome5
            name="box-open"
            size={50}
            color={theme.colors.Sub.Black[20]}
          />
          <Text style={styles.emptyText}>저장된 기록이 없어요.</Text>
        </View>
      )}

      <Spinner loading={loading} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 26
  },

  scrollContainer: {
    gap: 18
  },

  deleteButton: {
    color: theme.colors.Main.Warning,
    textAlign: 'right',

    ...theme.typo.Body2_12_Bold
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18
  },

  emptyText: {
    color: theme.colors.Sub.Black[30],
    textAlign: 'center',

    ...theme.typo.B1_15_Bold
  }
});
