import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
import { NestedQuestion } from './interfaces/nested-questions';
export class QuestionGroup extends NestedQuestion {
    constructor(options) {
        super(options);
        this.isExpanded = true;
        this.renderingType = 'group';
        this.questions = options.questions || [];
        this.controlType = AfeControlType.AfeFormGroup;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtcXVlc3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW1wYXRoLWtlbnlhL25neC1vcGVubXJzLWZvcm1lbnRyeS8iLCJzb3VyY2VzIjpbImZvcm0tZW50cnkvcXVlc3Rpb24tbW9kZWxzL2dyb3VwLXF1ZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsTUFBTSxPQUFPLGFBQWMsU0FBUSxjQUFjO0lBSTdDLFlBQVksT0FBNkI7UUFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSG5CLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJZCxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNuRCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVzdGlvbkJhc2UgfSBmcm9tICcuL3F1ZXN0aW9uLWJhc2UnO1xuaW1wb3J0IHsgR3JvdXBRdWVzdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvZ3JvdXAtcXVlc3Rpb24tb3B0aW9ucyc7XG5pbXBvcnQgeyBBZmVDb250cm9sVHlwZSB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbi9hZmUtY29udHJvbC10eXBlJztcblxuaW1wb3J0IHsgTmVzdGVkUXVlc3Rpb24gfSBmcm9tICcuL2ludGVyZmFjZXMvbmVzdGVkLXF1ZXN0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkdyb3VwIGV4dGVuZHMgTmVzdGVkUXVlc3Rpb24ge1xuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25CYXNlW107XG4gICAgaXNFeHBhbmRlZCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBHcm91cFF1ZXN0aW9uT3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5yZW5kZXJpbmdUeXBlID0gJ2dyb3VwJztcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBvcHRpb25zLnF1ZXN0aW9ucyB8fCBbXTtcbiAgICAgICAgdGhpcy5jb250cm9sVHlwZSA9IEFmZUNvbnRyb2xUeXBlLkFmZUZvcm1Hcm91cDtcbiAgICB9XG59XG4iXX0=