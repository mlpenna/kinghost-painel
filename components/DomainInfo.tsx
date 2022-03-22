function InfoDominio(props: any) {

    if (typeof props.selectedDomainInfo === 'undefined' && Object.keys(props.selectedDomainInfo.body).length === 0 || props.selectedDomainInfo.status != 'ok') {
        return (
            <div></div>
            // <div className="flex p-8 flex-col">
            //     <div className="normal-case ml-6 font-bold text-xl font-sans text-slate-600">Informações Domínio</div>
            // </div>
        )
    }

    return (
        <>
            <div className="flex p-8 flex-col">
                <div className="normal-case ml-3 font-bold text-xl font-sans text-slate-600">Informações Domínio</div>
                <div className="grid grid-cols-4 border border-gray-600 bg-white w-fill gap-1 ml-3 mt-2 p-3 rounded-md">
                    <div className="">
                        <span className="mr-4 font-bold">Domínio ID:</span>
                        <span>{props.selectedDomainID}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Domínio:</span>
                        <span>{props.selectedDomainInfo.body.dominio}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Servidor:</span>
                        <span>{props.selectedDomainInfo.body.servidor}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Espaço FTP:</span>
                        <span>{props.selectedDomainInfo.body.discoWeb + " MB"}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Espaço Banco:</span>
                        <span>{props.selectedDomainInfo.body.discoBanco + " MB"}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Espaço E-mail:</span>
                        <span>{props.selectedDomainInfo.body.discoEmails + " MB"}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Criado Em:</span>
                        <span>{props.selectedDomainInfo.body.dataCriado}</span>
                    </div>
                    <div className="">
                        <span className="mr-4 font-bold">Plano:</span>
                        <span>{props.selectedDomainInfo.body.plano}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoDominio;