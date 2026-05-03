import Header from '@/components/common/header';
import HistoryCard from '@/components/history/item';
import theme from '@/styles';
import { STORAGE_KEYS } from '@/constants/keys';
import { getData, removeData } from '@/utils/storage/asyncStorage';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from '@/components/common/modal';
import { THistoryItem } from '@/types/common';
import { useCallback, useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Spinner from '@/components/common/spinner';
import { useFocusEffect } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { toast } from '@/utils/toast';
import FlatScrollView from '@/components/common/layout/FlatScrollView';

const History = () => {
  const [historyData, setHistoryData] = useState<THistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isShowDelete, setIsShowDelete] = useState(false);

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
    setIsShowDelete(false);
    setLoading(true);

    try {
      await removeData(STORAGE_KEYS.CALC_HISTORY);
      setHistoryData([]);
      toast.success('기록이 삭제되었습니다.');
    } catch (error) {
      console.error('기록 삭제 실패', error);
      toast.error('기록 삭제 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          title="계산 기록"
          description="최근 계산 기록 최대 50개를 볼 수 있어요."
          topComp={
            historyData?.length > 0 && (
              <Pressable onPress={() => setIsShowDelete(true)}>
                <Text style={styles.deleteButton}>전체 삭제</Text>
              </Pressable>
            )
          }
        />

        {historyData?.length > 0 ? (
          <FlatScrollView
            style={styles.scrollContainer}
            data={historyData}
            render={({ item, index }) => (
              <HistoryCard
                item={item}
                colorIndex={historyData.length - 1 - index}
              />
            )}
            itemKey={(item, index) => `${item.updateTs}-${index}`}
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

      <Modal
        open={isShowDelete}
        onOk={deleteHandler}
        onClose={() => setIsShowDelete(false)}
        okButtonType="warning"
      >
        <View style={styles.deleteContainer}>
          <Ionicons name="trash" size={52} color={theme.colors.Main.Warning} />
          <View>
            <Text style={styles.deleteText}>
              전체 계산 기록을 삭제하시겠어요?
            </Text>
            <Text style={styles.deleteDescText}>
              (삭제 후 복구가 불가능합니다.)
            </Text>
          </View>
        </View>
      </Modal>
    </>
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
  },

  deleteContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  deleteText: {
    textAlign: 'center',
    color: theme.colors.Main.Black,

    ...theme.typo.H4_18_Bold
  },

  deleteDescText: {
    textAlign: 'center',
    color: theme.colors.Sub.Black[200],

    ...theme.typo.Body2_12_Regular
  }
});
