import PreviewTask from "@/modules/tasks/components/previewTask/PreviewTask";
import "@/modules/tasks/style.scss";

const Tasks = () => {
    return (
        <section className="tasks">
            <ul className="tasks__list">
                <li>
                    <PreviewTask id={1} title="dcsddddddcsdc" boardName="sdcsd ccccccccccsd" />
                </li>
                <li>
                    <PreviewTask id={2} title="dcsddddddcsdc" boardName="sdcsd ccccccccccsd" />
                </li>
            </ul>
        </section>
    )
}

export default Tasks;