import { QuestionBase } from './question-base';
import { AfeControlType } from '../../abstract-controls-extension/afe-control-type';
export class FileUploadQuestion extends QuestionBase {
    constructor(options) {
        super(options);
        this.showTime = true;
        this.showWeeksAdder = false;
        this.renderingType = 'file';
        this.dataSource = options.dataSource;
        this.controlType = AfeControlType.AfeFormControl;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtcXVlc3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJmb3JtLWVudHJ5L3F1ZXN0aW9uLW1vZGVscy9maWxlLXVwbG9hZC1xdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXBGLE1BQU0seUJBQTBCLFNBQVEsWUFBWTtJQUlsRCxZQUFZLE9BQWtDO1FBQzVDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUpqQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBSXJCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUM7SUFDbkQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlc3Rpb25CYXNlIH0gZnJvbSAnLi9xdWVzdGlvbi1iYXNlJztcbmltcG9ydCB7IEZpbGVVcGxvYWRRdWVzdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMvZmlsZS11cGxvYWQtcXVlc3Rpb24tb3B0aW9ucyc7XG5pbXBvcnQgeyBBZmVDb250cm9sVHlwZSB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbi9hZmUtY29udHJvbC10eXBlJztcblxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRRdWVzdGlvbiBleHRlbmRzIFF1ZXN0aW9uQmFzZSB7XG4gIHNob3dUaW1lID0gdHJ1ZTtcbiAgc2hvd1dlZWtzQWRkZXIgPSBmYWxzZTtcbiAgZGF0YVNvdXJjZT86IGFueTtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogRmlsZVVwbG9hZFF1ZXN0aW9uT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMucmVuZGVyaW5nVHlwZSA9ICdmaWxlJztcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBvcHRpb25zLmRhdGFTb3VyY2U7XG4gICAgdGhpcy5jb250cm9sVHlwZSA9IEFmZUNvbnRyb2xUeXBlLkFmZUZvcm1Db250cm9sO1xuICB9XG59XG4iXX0=