import { Filter } from "@/types/Filter";

function queryFilter(filter:Filter):string{

    let params = "";

    const Nname = filter.name ? `&name=${filter.name}` : "";
    const Nstatus = filter.status ? `&status=${filter.status}` : "";
    const Nspecies = filter.species ? `&species=${filter.species}` : "";
    const Ngender = filter.gender ? `&gender=${filter.gender}` : "";

    return params+Nname+Nstatus+Nspecies+Ngender;
}

export {queryFilter}