export default function blogitem({params}: {params: {id: string}}) {
    return (
            <div>
                ini id: {params.id}
            </div>
    );
}