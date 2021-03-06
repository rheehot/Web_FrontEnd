import React, { useEffect, useState } from "react";
import Building from "components/Building/BuildingDetail";
import Axios from "axios";
import { useRouter } from "next/dist/client/router";
import useSWR from "swr";

const fetcher = (url: string) => {
    return Axios.get(url).then((res) => res.data);
};

export default () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // 빌딩 리뷰 조회!
    // const { data, error } = useSWR(`/api/v1/buildingId=${router.query.id}`, fetcher);

    useEffect(() => {
        setTimeout(() => {
            setLoading(() => false);
        }, 1000);
    }, []);

    return <Building loading={loading} />;
};
