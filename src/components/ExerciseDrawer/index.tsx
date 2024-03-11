import { useAppSelector } from "@hooks/typed-react-redux-hooks";
import { TRAINING_TYPE } from "@redux/slices/interfaces";
import { selectTrainingDay, selectTrainingType } from "@redux/slices/trainingsSlice";
import { getDateFromString } from "@utils/getDate";
import { Drawer } from "antd";
import { Form, Input, Space } from 'antd';
import { FC } from "react";

export const ExerciseDrawer: FC = ({ onClose, isOpened }) => {
    const selectedTrainingType = useAppSelector(selectTrainingType)
    const selectedTrainingDay = useAppSelector(selectTrainingDay)
    const trainingDate = getDateFromString(selectedTrainingDay)


    return <Drawer
        title='Добавление упражнений'
        placement='right'
        onClose={onClose}
        open={isOpened}
    >
        <p>{TRAINING_TYPE[selectedTrainingType]}</p>
        <p>{trainingDate}</p>
        <Form>
            <Form.Item>
                <Input placeholder='Упражнение' />
            </Form.Item>
            <Space>
                <Space direction='vertical'>
                    <p>Подходы </p>
                    <Form.Item>
                        <Input addonBefore='+' placeholder='1' type='number' min={1} />
                    </Form.Item>
                </Space>
                <Space split='x'>
                    <Space direction='vertical'>
                        <p>Вес, кг </p>
                        <Form.Item>
                            <Input placeholder='0' type='number' min={1} />
                        </Form.Item>
                    </Space>
                    <Space direction='vertical'>
                        <p>Количество</p>
                        <Form.Item>
                            <Input placeholder='3' type='number' min={1} />
                        </Form.Item>
                    </Space>
                </Space>
            </Space>
        </Form>
    </Drawer>
}