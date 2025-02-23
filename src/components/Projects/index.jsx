import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { Button } from '@heroui/react';

const index = () => {
    return (
        <div
            className="grid  w-auto md:w-1/2 gap-4 md:px-12 mt-16"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
            <Card className="w-90">
                <CardBody className="font-nunito text-slate-700 dark:text-slate-200">
                    <p>WebScraping Python & Selenium</p>
                    <Button className="bg-yellow-200 dark:text-black">Details</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="font-nunito text-slate-700 dark:text-slate-200">
                    <p>Webhook Python & FastAPI.</p>
                    <Button className="bg-yellow-200 dark:text-black">Details</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="font-nunito text-slate-700 dark:text-slate-200">
                    <p>FullStack Application ReactJS & NextJS.</p>
                    <Button className="bg-green-200 dark:text-black">Details</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="font-nunito text-slate-700 dark:text-slate-200">
                    <p>demo.</p>
                    <Button className="bg-green-200 dark:text-black">Details</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="dark:text-white">
                    <p>demo.</p>
                    <Button color="warning">Details</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="dark:text-white">
                    <p>demo.</p>
                    <Button color="warning">Details</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default index;
