export default function Description({ description }: { description: string }) {
    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
}
